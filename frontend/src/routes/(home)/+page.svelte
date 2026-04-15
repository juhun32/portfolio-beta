<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    import Editor from "$lib/components/Editor.svelte";
    import Profile from "$lib/components/Profile.svelte";

    import { Spinner } from "$lib/components/ui/spinner/index.js";

    import type { SpotifyData } from "$lib/types/spotify";

    let isLoading = $state(true);

    // spotify / editor
    const offlineData: SpotifyData = {
        isPlaying: false,
        title: "N/A",
        artist: "N/A",
        albumImageURL: "N/A",
        songURL: "",
        nowPlaying: "",
        topTracks: [],
    };

    let isInitialLoad = true;

    let spotifyInterval: number;
    let spotifyData = $state<SpotifyData>(offlineData);

    let code = $state("");
    let editorRef: any = $state();

    async function fetchSpotifyData() {
        try {
            const response = await fetch("/spotify");
            if (!response.ok) {
                throw new Error("API Error");
            }

            const rawData = await response.json();
            const isPlaying =
                rawData?.isPlaying || rawData?.is_playing || false;

            const newData = {
                ...rawData,
                title: rawData?.title || rawData?.item?.name,
                isPlaying: isPlaying,
                artist:
                    rawData?.artist ||
                    rawData?.item?.artists?.[0]?.name ||
                    "N/A",
            };

            handleDataUpdate(newData);
        } catch (error) {
            handleDataUpdate(offlineData);
        }
    }

    function handleDataUpdate(newData: SpotifyData) {
        spotifyData = newData;

        // if initial load, set full code
        // if not only modify the activity block
        if (isInitialLoad) {
            code = getCode(newData);
            isInitialLoad = false;
            isLoading = false;
        } else {
            updateSpotify(newData);
        }
    }

    function getSpotify(data: Partial<SpotifyData>) {
        const safeTitle = JSON.stringify(data.title || "N/A");
        const safeArtist = JSON.stringify(data.artist || "N/A");
        const safeAlbumImageURL = JSON.stringify(data.albumImageURL || "N/A");
        const statusText = data.isPlaying ? "Online" : "Offline";

        return `const Activity = {
    status: "${statusText}",
    music: {
        isPlaying: ${data.isPlaying},
        albumImageURL: ${safeAlbumImageURL},
        track: ${safeTitle},
        artist: ${safeArtist},
    }
};`;
    }

    function updateSpotify(data: Partial<SpotifyData>) {
        const newBlock = getSpotify(data);

        // const Activity    // the variable name
        // \s*=\s*\{         // " = {" with any whitespace
        // [\s\S]*?          // content inside
        // \};               // closing "};"
        const activityRegex = /const Activity\s*=\s*\{[\s\S]*?\};/;

        const match = code.match(activityRegex);

        if (match) {
            const currentBlock = match[0];
            // string should be normalized to avoid whitespace differences
            // this is to only update when there's an actual content change
            const normalize = (str: string) => str.replace(/\s/g, "");

            if (normalize(currentBlock) !== normalize(newBlock)) {
                code = code.replace(activityRegex, newBlock);

                // forcing value update in editor
                if (editorRef) {
                    editorRef.updateContent(code);
                }
            }
        } else {
            // if the "const Activity" is deleted, can't update anymore
            // so just log a warning silently
            console.warn("activity block not found");
        }
    }

    function getCode(data: Partial<SpotifyData>) {
        return `const Profile = {
    name: "Juhun Park",
    koreanName: "박주훈",
    titles: [
        "I'll come back, I promise",
        "Be happy and be free",
        "Always in my heart",
    ],
    contacts: [
        { 
            label: "Email", 
            value: "juhunpark32@gmail.com", 
            link: "mailto:juhunpark32@gmail.com" 
        },
        { 
            label: "LinkedIn", 
            value: "juhun-park", 
            link: "https://www.linkedin.com/in/juhun-park/" 
        },
        { 
            label: "GitHub", 
            value: "juhun32", 
            link: "https://www.github.com/juhun32" 
        }
    ]
};

const Experience = [
    {
        role: "Sergeant, Network Operations Specialist",
        company: "ROK Army",
        period: "Jun 2026 - Feb 2028"
    },
    {
        role: "Teaching Assistant, Data Structures (CS310)",
        company: "George Mason University",
        period: "Jan 2026 - May 2026",
    },
    {
        role: "Lead Developer",
        company: "Google Developer Groups (GMU)",
        period: "Aug 2025 - May 2026",
        link: "https://github.com/google-dev-groups-gmu"
    },
    {
        role: "Software Engineer Intern",
        company: "Northwestern University",
        period: "Jun 2025 - Aug 2025",
        }
];

const Projects = [
    { 
        name: "sequential", 
        description: "Assetto Corsa telemetry WebSocket pipeline",
        link: "https://github.com/juhun32/sequential" 
    },
    {
        name: "bucket",
        description: "Semantic caching system for LLMs with edge-based vectorization",
        link: "https://echo-lac-gamma.vercel.app/"
    },
    { 
        name: "revive.fyi", 
        description: "Tech internship platform",
        link: "https://copium.dev" 
    },
    { 
        name: "distributed-task-queue", 
        description: "Distributed task queue system built with Go and RabbitMQ",
        link: "https://calple.date" 
    }
];

${getSpotify(data)}

const Notes = [
    "serving in the army starting June 2026, so don't expect github dots to appear after that",
    "im working as a network operations specialist",
];

return { Profile, Experience, Projects, Activity, Notes };
`;
    }

    // parsing the code to data object
    let parsedData = $derived.by(() => {
        try {
            return new Function(code)();
        } catch (e) {
            console.error("parsing error:", e);
            return null;
        }
    });

    const fallbackData = {
        Profile: {
            name: "parsing error",
            titles: ["N/A"],
            contacts: [
                {
                    label: "Email",
                    value: "juhunpark32@gmail.com",
                    link: "mailto:juhunpark32@gmail.com",
                },
                {
                    label: "LinkedIn",
                    value: "juhun-park",
                    link: "https://www.linkedin.com/in/juhun-park/",
                },
                {
                    label: "GitHub",
                    value: "juhun32",
                    link: "https://www.github.com/juhun32",
                },
            ],
        },
        Activity: { status: "Error", music: {} },
        Experience: [],
        Projects: [],
        Notes: [],
    };

    onMount(() => {
        fetchSpotifyData();
        spotifyInterval = setInterval(fetchSpotifyData, 30 * 1000);
    });

    onDestroy(() => {
        clearInterval(spotifyInterval);
    });
</script>

<div
    class="container w-full h-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden gap-6"
>
    <div class="w-full hidden lg:flex flex-col rounded-lg overflow-hidden">
        <span
            class="px-5 py-1 border-b bg-muted text-xs font-mono text-muted-foreground flex items-center"
        >
            profile.config.js
        </span>
        <div class="flex-1 w-full relative bg-background dark:bg-secondary">
            {#if isLoading}
                <div
                    class="w-full h-full flex items-center justify-center flex-col gap-2"
                >
                    <Spinner />
                </div>
            {:else}
                <Editor bind:this={editorRef} bind:value={code} />
            {/if}
        </div>
    </div>

    <div
        class="w-full h-full overflow-y-auto flex items-start justify-center p-3 rounded-lg"
    >
        <Profile data={parsedData ?? fallbackData} spotify={spotifyData} />
    </div>
</div>
