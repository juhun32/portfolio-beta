<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { fade, slide } from "svelte/transition";

    // components
    import { Separator } from "$lib/components/ui/separator";
    import { Skeleton } from "$lib/components/ui/skeleton/index.js";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
    import * as Collapsible from "$lib/components/ui/collapsible/index.js";
    import Badge from "$lib/components/ui/badge/badge.svelte";

    // images
    import Profile from "$lib/assets/profile.png";

    // icons
    import Phone from "@lucide/svelte/icons/phone";
    import Mails from "@lucide/svelte/icons/mail";
    import Linkedin from "$lib/components/svg/Linkedin/Linkedin.svelte";
    import Github from "$lib/components/svg/Github/Github.svelte";
    import Spotify from "$lib/components/svg/Spotify/Primary_Logo_Green_RGB.svg";
    import {
        ArrowUpRight,
        ChevronsRight,
        ChevronsUpDownIcon,
    } from "lucide-svelte";

    // types
    import type { Contact } from "$lib/types/profile";
    import type { SpotifyData } from "$lib/types/spotify";

    const contacts: Contact[] = [
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
    class="max-w-2xl w-full h-full flex flex-col gap-2 sm:gap-0 sm:grid sm:grid-cols-[1fr_3fr] items-center justify-start mx-auto my-8 px-3"
>
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
        class="h-[94px] aspect-[1/1] object-cover rounded-full"
    />
    <div class="w-full grid grid-rows-[1fr_auto_1fr] items-center">
        <h1
            class="w-full flex items-baseline justify-center sm:justify-start gap-1 text-xl font-normal px-1"
        >
            Juhun Park <p class="text-xs">박주훈</p>
        </h1>
        {#key currentText}
            <span
                class="w-full flex justify-center lg:justify-start text-muted-foreground text-sm px-1"
                in:fade={{ duration: 500 }}>{currentText}</span
            >
        {/key}

        <a
            class="w-full gap-2 rounded-full font-normal flex items-center justify-center sm:justify-start h-fit px-0 pt-2 gap-2"
            href="https://github.com/juhun32/resume"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Badge
                class="font-normal tracking-tight text-sm h-5"
                variant="secondary"
            >
                Resume
            </Badge>
            <p
                class="flex items-start gap-1 text-sm text-start text-xs hover:underline"
            >
                Latest:
                {new Date().toLocaleDateString()}
                <ArrowUpRight class="h-3 w-3" strokeWidth={1.5} />
            </p>
        </a>
    </div>
</div>

<div
    class="max-w-2xl w-full h-full flex flex-col gap-16 items-start justify-start mx-auto my-8"
>
    <div class="w-full">
        <Badge variant="secondary" class="h-5 text-sm font-normal mb-4">
            Contact
        </Badge>
        <div class="w-full grid grid-cols-[1fr_3fr] items-center text-sm px-3">
            {#each contacts as contact}
                <a href={contact.link} class="flex text-muted-foreground py-2">
                    {contact.label}
                </a>
                <a
                    href={contact.link}
                    class="px-3 flex items-start gap-1 hover:underline py-2"
                >
                    {contact.value}
                    <ArrowUpRight class="h-3 w-3" strokeWidth={1.5} />
                </a>
            {/each}
        </div>
    </div>

    <div
        id="spotify-status"
        class="flex flex-col items-start justify-center gap-4 w-full"
    >
        <Badge variant="secondary" class="h-5 text-sm font-normal gap-1">
            <img src={Spotify} alt="Spotify Logo" class="h-3.5 w-3.5" />
            Playing
        </Badge>
        {#if spotifyData.isPlaying}
            <a
                href={spotifyData.songURL}
                class="grid grid-cols-[1fr_3fr] items-center hover:underline w-full px-3"
                target="_blank"
                rel="noopener noreferrer"
            >
                {#if spotifyData.albumImageURL}
                    <div class="flex items-center gap-4">
                        <ChevronsRight
                            class="h-4 w-4 text-muted-foreground"
                            strokeWidth={1.5}
                        />
                        <img
                            src={spotifyData.albumImageURL}
                            alt="Album art"
                            class="h-8 w-8 rounded"
                        />
                    </div>
                {/if}
                <div class="px-3">
                    <p class="font-normal text-xs">
                        {spotifyData.title}
                    </p>
                    <p class="text-xs text-muted-foreground">
                        {spotifyData.artist}
                    </p>
                </div>
            </a>
        {:else}
            <div
                class="grid grid-cols-[1fr_3fr] items-center hover:underline w-full px-3"
            >
                <div class="flex items-center gap-4">
                    <ChevronsRight
                        class="h-4 w-4 text-muted-foreground"
                        strokeWidth={1.5}
                    />
                    <Skeleton class="h-8 w-8 rounded" />
                </div>
                <div class="text-xs text-muted-foreground px-3">Offline</div>
            </div>
        {/if}
    </div>

    {#if spotifyData.topTracks && spotifyData.topTracks.length > 0}
        <Collapsible.Root class="w-full">
            <div class="flex items-center justify-between mb-4">
                <Badge
                    variant="secondary"
                    class="h-5 text-sm font-normal gap-1"
                >
                    <img src={Spotify} alt="Spotify Logo" class="h-3.5 w-3.5" />
                    Top Tracks
                </Badge>
                <Collapsible.Trigger
                    class={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                        class: "p-0 h-6 w-6",
                    })}
                >
                    <ChevronsUpDownIcon class="h-6" />
                    <span class="sr-only">Toggle</span>
                </Collapsible.Trigger>
            </div>
            <a
                href={spotifyData.topTracks[0].url}
                class="grid grid-cols-[1fr_3fr] items-center group rounded-md transition-colors px-3"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div class="flex items-center gap-4">
                    <div
                        class="w-4 text-center text-xs font-normal text-muted-foreground"
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
                </div>
                <div class="group-hover:underline px-3">
                    <p class="font-normal text-xs">
                        {spotifyData.topTracks[0].title}
                    </p>
                    <p class="text-xs text-muted-foreground">
                        {spotifyData.topTracks[0].artist}
                    </p>
                </div>
            </a>
            <Collapsible.Content class="mt-4">
                {#each spotifyData.topTracks.slice(1, 10) as track, i}
                    <a
                        href={track.url}
                        class="grid grid-cols-[1fr_3fr] items-center pb-4 gap-4 group rounded-md px-3"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div class="flex items-center gap-4">
                            <div
                                class="w-4 text-center text-xs font-normal text-muted-foreground"
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
                        </div>
                        <div class="group-hover:underline">
                            <p class="font-normal text-xs">
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
