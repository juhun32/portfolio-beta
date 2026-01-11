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
        "Software Engineer", 
        "Racing Enthusiast", 
        "Korean BBQ Lover"
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
        role: "Lead Developer",
        company: "Google Developer Groups (GMU)",
        period: "Aug 2025 - Present",
        description: "Architected a Go/PostgreSQL course scheduler for 10k+ sections and scaled a Python scraping pipeline with RabbitMQ/Redis to support 100+ concurrent users.",
        link: "https://github.com/google-dev-groups-gmu"
    },
    {
        role: "Software Engineer Intern",
        company: "Northwestern University",
        period: "Jun 2025 - Aug 2025",
        description: "Built an alumni platform with SvelteKit/.NET serving 150 users; optimized Supabase SQL queries to sub-5ms latency and offloaded 95% of reads via Redis caching."
    }
];

const Projects = [
    { 
        name: "Revive.fyi", 
        description: "Internship platform processing 2k+ apps/week; reduced analytics latency by 80% via CQRS and eliminated AWS egress fees using Cloudflare R2.",
        link: "https://copium.dev" 
    },
    { 
        name: "Castle Postdate", 
        description: "Real-time distributed scheduler; achieved sub-100ms sync latency using Go microservices, GCP Pub/Sub, and unified Firestore state models.",
        link: "https://calple.date" 
    },
    { 
        name: "Sequential", 
        description: "High-performance Assetto Corsa telemetry pipeline using Go and zero-copy shared memory with sub-10ms WebSocket synchronization.",
        link: "https://github.com/juhun32/sequential" 
    }
];

${getSpotify(data)}

return { Profile, Experience, Projects, Activity };
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
    class="container w-full h-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden gap-3"
>
    <div class="w-full hidden lg:flex flex-col border">
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
        class="w-full h-full overflow-y-auto bg-card dark:bg-secondary/20 flex items-start justify-center p-3 border"
    >
        <Profile data={parsedData ?? fallbackData} spotify={spotifyData} />
    </div>
</div>
