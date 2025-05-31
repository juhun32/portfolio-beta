<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { fade } from "svelte/transition";

    // components
    import { Separator } from "$lib/components/ui/separator";
    import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
    import * as Collapsible from "$lib/components/ui/collapsible/index.js";

    // images
    import Profile from "$lib/assets/profile.png";

    // icons
    import Phone from "@lucide/svelte/icons/phone";
    import Mails from "@lucide/svelte/icons/mail";
    import Download from "@lucide/svelte/icons/download";
    import Linkedin from "$lib/components/svg/Linkedin/Linkedin.svelte";
    import Github from "$lib/components/svg/Github/Github.svelte";
    import Spotify from "$lib/components/svg/Spotify/Primary_Logo_Green_RGB.svg";
    import { ChevronsUpDownIcon } from "lucide-svelte";

    // types
    import type { Contact } from "$lib/types/profile";
    import type { SpotifyData } from "$lib/types/spotify";

    const contacts: Contact[] = [
        {
            icon: Phone,
            label: "Phone",
            value: "(202) 924 - 4546",
            link: "tel:+12029244546",
        },
        {
            icon: Mails,
            label: "Email",
            value: "juhunpark32@gmail.com",
            link: "mailto:juhunpark32@gmail.com",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "juhun-park",
            link: "https://www.linkedin.com/in/juhun-park/",
        },
        {
            icon: Github,
            label: "GitHub",
            value: "juhun32",
            link: "https://www.github.com/juhun32",
        },
    ];

    // changing text
    let texts = ["Software Engineer", "Racing Enthusiast", "Korean BBQ Lover"];
    let index = 0;
    let currentText = $state(texts[index]);
    let interval: number;

    // spotify
    let spotifyInterval: number;
    let spotifyData = $state<SpotifyData>({
        isPlaying: false,
        title: "",
        artist: "",
        albumImageURL: "",
        songURL: "",
        nowPlaying: "",
        topTracks: [],
    });

    async function fetchSpotifyData() {
        try {
            const response = await fetch("/spotify");
            const data = await response.json();

            spotifyData = {
                isPlaying: data?.isPlaying || false,
                title: data?.title || "",
                artist: data?.artist || "",
                albumImageURL: data?.albumImageURL || "",
                songURL: data?.songURL || "",
                nowPlaying: data?.nowPlaying || "",
                topTracks: data?.topTracks || [],
            };
        } catch (error) {
            console.error("Failed to fetch Spotify data", error);
            spotifyData.isPlaying = false;
        }
    }

    // lifecycle hooks
    onMount(() => {
        // change text every 5 seconds
        interval = setInterval(() => {
            index = (index + 1) % texts.length;
            currentText = texts[index];
        }, 5000);

        // fetch spotify data every 30 seconds
        fetchSpotifyData();
        spotifyInterval = setInterval(fetchSpotifyData, 30 * 1000);
    });

    onDestroy(() => {
        clearInterval(interval);
        clearInterval(spotifyInterval);
    });
</script>

<div
    class="w-full h-full flex flex-col items-center justify-center lg:items-start lg:justify-start py-4 md:py-8 lg:pl-8 xl:pl-16"
>
    <div class="px-4 sm:px-8">
        <!-- <div class="flex flex-col items-baseline">
            <CornerUpRight class="w-3 text-stone-400" />
            <p
                class="text-xs text-stone-400"
                style="writing-mode: vertical-rl;"
            >
                my beautiful girlfriend's favorite picture of me
            </p>
        </div> -->
        <img
            src={Profile}
            alt="Profile"
            class="h-[200px] sm:h-[250px] aspect-[1/1] sm:aspect-[3/4] object-cover p-1 border rounded-full sm:rounded-xl overflow-hidden border-stone-300 dark:border-stone-800"
        />
    </div>

    <div
        class="w-full flex flex-col items-center lg:items-start sm:p-4 md:px-8 gap-2 md:py-0"
    >
        <h1
            class="w-full flex items-baseline justify-center lg:justify-start gap-2 text-2xl sm:text-4xl font-bold pt-4"
        >
            Juhun Park <p class="text-sm">박주훈</p>
        </h1>

        {#key currentText}
            <span
                class="w-full flex justify-center lg:justify-start text-2xl sm:text-3xl font-bold text-yellow-900/80 dark:text-yellow-700/80"
                in:fade={{ duration: 500 }}>{currentText}</span
            >
        {/key}

        <div
            class="pt-4 grid grid-cols-[1fr_1fr_6fr] sm:grid-cols-[1fr_2fr_1fr_6fr] items-center gap-2 text-sm md:text-base"
        >
            {#each contacts as contact}
                <contact.icon class="h-4 w-4" />
                <a href={contact.link} class="hidden sm:flex">
                    {contact.label}
                </a>
                <Separator orientation="vertical" class="h-4 md:mx-2" />
                <a href={contact.link}>
                    {contact.value}
                </a>
            {/each}
        </div>

        <div class="w-full flex flex-col sm:items-start pt-4">
            <h3 class="text-sm font-semibold mb-2">Currently Playing</h3>
            <div class="flex gap-4">
                <div class="flex items-center gap-2">
                    <img src={Spotify} alt="Spotify Logo" class="h-4 w-4" />
                </div>

                <div id="spotify-status" class="text-xs md:text-sm">
                    {#if spotifyData.isPlaying}
                        <a
                            href={spotifyData.songURL}
                            class="flex items-center gap-2 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {#if spotifyData.albumImageURL}
                                <img
                                    src={spotifyData.albumImageURL}
                                    alt="Album art"
                                    class="h-8 w-8 rounded"
                                />
                            {/if}
                            <div>
                                <p class="font-medium">{spotifyData.title}</p>
                                <p class="text-xs text-muted-foreground">
                                    by {spotifyData.artist}
                                </p>
                            </div>
                        </a>
                    {:else}
                        Not playing anything right now
                    {/if}
                </div>
            </div>
        </div>

        <div class="flex flex-col pt-4 w-full">
            {#if spotifyData.topTracks && spotifyData.topTracks.length > 0}
                <Collapsible.Root class="w-full">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="text-sm font-semibold">My Top Tracks</h3>
                        <Collapsible.Trigger
                            class={buttonVariants({
                                variant: "ghost",
                                size: "icon",
                                class: "p-0 h-4",
                            })}
                        >
                            <ChevronsUpDownIcon class="h-6" />
                            <span class="sr-only">Toggle</span>
                        </Collapsible.Trigger>
                    </div>
                    <a
                        href={spotifyData.topTracks[0].url}
                        class="flex items-center pb-4 gap-4 group rounded-md transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div
                            class="flex-shrink-0 w-4 text-center font-medium text-muted-foreground"
                        >
                            {1}
                        </div>
                        {#if spotifyData.topTracks[0].coverImage}
                            <img
                                src={spotifyData.topTracks[0].coverImage.url}
                                alt="{spotifyData.topTracks[0].title} album art"
                                class="h-8 w-8 rounded object-cover"
                            />
                        {/if}
                        <div>
                            <p
                                class="font-medium group-hover:underline text-xs"
                            >
                                {spotifyData.topTracks[0].title}
                            </p>
                            <p class="text-xs text-muted-foreground">
                                {spotifyData.topTracks[0].artist}
                            </p>
                        </div>
                    </a>
                    <Collapsible.Content class="">
                        {#each spotifyData.topTracks.slice(1, 10) as track, i}
                            <a
                                href={track.url}
                                class="flex items-center pb-4 gap-4 group rounded-md transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div
                                    class="flex-shrink-0 w-4 text-center font-medium text-muted-foreground"
                                >
                                    {i + 2}
                                </div>
                                {#if track.coverImage}
                                    <img
                                        src={track.coverImage.url}
                                        alt="{track.title} album art"
                                        class="h-8 w-8 rounded object-cover"
                                    />
                                {/if}
                                <div>
                                    <p
                                        class="font-medium group-hover:underline text-xs"
                                    >
                                        {track.title}
                                    </p>
                                    <p class="text-xs text-muted-foreground">
                                        {track.artist}
                                    </p>
                                </div>
                            </a>
                        {/each}
                    </Collapsible.Content>
                </Collapsible.Root>
            {/if}
        </div>
    </div>
</div>
