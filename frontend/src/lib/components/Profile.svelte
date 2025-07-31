<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { fade } from "svelte/transition";

    // components
    import { Separator } from "$lib/components/ui/separator";
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
    import { ArrowUpRight, ChevronsUpDownIcon } from "lucide-svelte";

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
    class="max-w-xl container w-full h-full my-16 flex items-center justify-start mx-auto gap-4 p-4 px-5 border rounded-full"
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
    <div class="h-full grid grid-rows-[1fr_1fr_1fr] items-center">
        <h1
            class="w-full flex items-baseline justify-start gap-1 text-xl font-normal px-1"
        >
            Juhun Park <p class="text-xs">박주훈</p>
        </h1>
        {#key currentText}
            <span
                class="w-full flex justify-center lg:justify-start text-muted-foreground text-sm px-1 pb-0.5"
                in:fade={{ duration: 500 }}>{currentText}</span
            >
        {/key}
        <Badge variant="outline" class="flex gap-1 py-1 w-fit">
            <div class="flex items-center">
                <img src={Spotify} alt="Spotify Logo" class="h-3.5 w-3.5" />
            </div>

            <div id="spotify-status" class="text-xs md:text-sm">
                {#if spotifyData.isPlaying}
                    <a
                        href={spotifyData.songURL}
                        class="flex items-center gap-4 hover:underline"
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
                            <p class="font-medium text-sm">
                                {spotifyData.title}
                            </p>
                            <p class="text-xs text-muted-foreground">
                                by {spotifyData.artist}
                            </p>
                        </div>
                    </a>
                {:else}
                    <p class="text-xs text-muted-foreground font-normal">
                        Offline
                    </p>
                {/if}
            </div>
        </Badge>
    </div>
</div>

<div
    class="max-w-xl w-full h-full flex flex-col gap-4 items-start justify-start mx-auto"
>
    <div class="w-full">
        <Badge variant="outline" class="text-sm font-normal mb-4">Contact</Badge
        >
        <div class="w-full grid grid-cols-[1fr_6fr] items-center gap-4 text-sm">
            {#each contacts as contact}
                <a
                    href={contact.link}
                    class="hidden sm:flex text-muted-foreground"
                >
                    {contact.label}
                </a>
                <a href={contact.link} class="px-4 flex items-start gap-1">
                    {contact.value}
                    <ArrowUpRight class="h-3 w-3" strokeWidth={1.5} />
                </a>
            {/each}
        </div>
    </div>

    <div class="w-full lg:w-full flex flex-col w-full mt-6">
        {#if spotifyData.topTracks && spotifyData.topTracks.length > 0}
            <Collapsible.Root class="w-full">
                <div class="flex items-center justify-between mb-4">
                    <Badge variant="outline" class="text-sm font-normal">
                        Spotify Top Tracks
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
                    class="grid grid-cols-[1fr_6fr] items-center pb-4 gap-4 group rounded-md transition-colors"
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
                    <div class="px-4">
                        <p class="font-medium group-hover:underline text-xs">
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
                            class="grid grid-cols-[1fr_6fr] items-center pb-4 gap-4 group rounded-md transition-colors"
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
                            <div class="px-4">
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
