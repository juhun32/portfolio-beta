<script lang="ts">
    import { fade } from "svelte/transition";

    import { Separator } from "$lib/components/ui/separator";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
    import * as Collapsible from "$lib/components/ui/collapsible/index.js";
    import Badge from "$lib/components/ui/badge/badge.svelte";

    import ProfileImg from "$lib/assets/profile.png";

    import SpotifyLogo from "$lib/components/svg/Spotify/Primary_Logo_Green_RGB.svg";
    import {
        ArrowUpRight,
        ChevronsRight,
        ChevronsUpDownIcon,
        Briefcase,
        FolderGit2,
        Paperclip,
        Phone,
    } from "lucide-svelte";

    import type { SpotifyData } from "$lib/types/spotify";
    import Skeleton from "./ui/skeleton/skeleton.svelte";

    let { data, spotify } = $props<{ data: any; spotify: SpotifyData }>();

    let contacts = $derived(data?.Profile?.contacts || []);
    let titles = $derived(data?.Profile?.titles || ["Developer"]);
    let experiences = $derived(data?.Experience || []);
    let projects = $derived(data?.Projects || []);

    // rotating texts
    let index = $state(0);
    let currentText = $derived(titles[index]);

    $effect(() => {
        const interval = setInterval(() => {
            if (titles.length > 0) {
                index = (index + 1) % titles.length;
            }
        }, 5000);
        return () => clearInterval(interval);
    });
</script>

<div
    class="max-w-2xl w-full min-h-full flex flex-col gap-6 items-center justify-start mx-auto py-3 px-3"
>
    <div
        class="w-full flex flex-col sm:grid sm:grid-cols-[25%_75%] items-center gap-3"
    >
        <img
            src={ProfileImg}
            alt="Profile"
            class="h-[94px] aspect-[1/1] object-cover rounded-full"
        />
        <div class="w-full grid grid-rows-[1fr_auto] items-center">
            <div>
                <h1
                    class="w-full flex items-baseline justify-center sm:justify-start gap-2 text-xl font-light px-1"
                >
                    {data?.Profile?.name || "Juhun Park"}
                    <p class="text-xs">{data?.Profile?.koreanName || ""}</p>
                </h1>
                {#key currentText}
                    <span
                        class="w-full flex justify-center sm:justify-start text-muted-foreground text-sm px-1"
                        in:fade={{ duration: 500 }}>{currentText}</span
                    >
                {/key}
            </div>

            <a
                class="w-full gap-2 font-light flex items-center justify-center sm:justify-start h-fit px-0 pt-3 gap-2"
                href="https://github.com/juhun32/resume"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Badge
                    class="tracking-tight h-5 dark:border-muted-foreground gap-1"
                    variant="secondary"
                >
                    <Paperclip class="h-3 w-3" strokeWidth={1.5} />Resume
                </Badge>
                <p
                    class="flex items-start gap-1 text-sm text-start hover:underline"
                >
                    Latest: {new Date().toLocaleDateString()}
                    <ArrowUpRight class="h-3 w-3" strokeWidth={1.5} />
                </p>
            </a>
        </div>
    </div>

    <div class="w-full">
        <Badge
            variant="secondary"
            class="h-5 mb-4 dark:border-muted-foreground gap-1"
        >
            <Phone class="h-3 w-3" strokeWidth={1.5} />
            Contact
        </Badge>
        <div class="w-full grid grid-cols-[25%_75%] items-center text-sm px-3">
            {#each contacts as contact}
                <a
                    href={contact.link}
                    class="flex text-muted-foreground py-1 text-xs"
                >
                    {contact.label}
                </a>
                <a
                    href={contact.link}
                    class="px-3 flex items-start gap-1 hover:underline py-1"
                >
                    {contact.value}
                    <ArrowUpRight class="h-3 w-3" strokeWidth={1.5} />
                </a>
            {/each}
        </div>
    </div>
    <Separator class="my-2" />

    {#if experiences.length > 0}
        <div class="w-full">
            <Badge
                variant="secondary"
                class="h-5 mb-4 gap-1 dark:border-muted-foreground"
            >
                <Briefcase class="h-3 w-3" strokeWidth={1.5} /> Experience
            </Badge>
            <div class="w-full flex flex-col gap-6 px-3">
                {#each experiences as exp}
                    <div class="grid grid-cols-[25%_75%] gap-2 text-sm">
                        <div class="text-muted-foreground text-xs pt-0.5">
                            {exp.period}
                        </div>
                        <div>
                            <div class="font-medium">{exp.role}</div>
                            <div
                                class="text-muted-foreground text-xs mt-1 mb-3"
                            >
                                {exp.company}
                            </div>
                            <p class="text-muted-foreground leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <Separator class="my-2" />
    {/if}

    {#if projects.length > 0}
        <div class="w-full">
            <Badge
                variant="secondary"
                class="h-5 mb-4 gap-1 dark:border-muted-foreground"
            >
                <FolderGit2 class="h-3 w-3" /> Projects
            </Badge>
            <div class="w-full flex flex-col gap-6 px-3">
                {#each projects as project}
                    <a
                        href={project.link || "#"}
                        target="_blank"
                        class="flex flex-col gap-2 text-sm group items-start"
                    >
                        <div
                            class="font-medium flex items-center gap-1 group-hover:underline"
                        >
                            {project.name}
                            <ArrowUpRight
                                class="h-3 w-3 opacity-50 group-hover:opacity-100"
                            />
                        </div>
                        <p class="text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>
                    </a>
                {/each}
            </div>
        </div>
        <Separator class="my-2" />
    {/if}

    <div
        id="spotify-status"
        class="flex flex-col items-start justify-center gap-4 w-full"
    >
        <Badge
            variant="secondary"
            class="h-5 gap-1 dark:border-muted-foreground"
        >
            <img src={SpotifyLogo} alt="Spotify Logo" class="h-3.5 w-3.5" />
            {data?.Activity?.status || "Spotify"}
        </Badge>

        {#if data?.Activity?.music?.isPlaying}
            <a
                href={spotify.songURL || "#"}
                class="grid grid-cols-[25%_75%] sm:grid-cols-[15%_10%_75%] items-center hover:underline w-full px-3"
                target="_blank"
                rel="noopener noreferrer"
            >
                <p class="text-xs text-muted-foreground hidden sm:flex">
                    Now Playing
                </p>
                <div class="flex items-center gap-3">
                    <ChevronsRight
                        class="h-4 w-4 text-muted-foreground"
                        strokeWidth={1.5}
                    />
                    <img
                        src={spotify.albumImageURL}
                        alt="Album art"
                        class="h-8 w-8 rounded max-w-none sm:hidden"
                    />
                </div>
                <div class="flex items-center gap-3 px-3">
                    <img
                        src={spotify.albumImageURL}
                        alt="Album art"
                        class="h-8 w-8 rounded max-w-none hidden sm:block"
                    />
                    <div class="sm:px-3 w-full">
                        <p class="font-light text-sm">
                            {data?.Activity?.music?.track}
                        </p>
                        <p class="text-xs text-muted-foreground">
                            {data?.Activity?.music?.artist}
                        </p>
                    </div>
                </div>
            </a>
        {:else}
            <div
                class="grid grid-cols-[25%_75%] sm:grid-cols-[15%_10%_75%] items-center w-full px-3"
            >
                <p class="text-xs text-muted-foreground hidden sm:flex">
                    Status
                </p>
                <div class="flex items-center gap-3">
                    <ChevronsRight
                        class="h-4 w-4 text-muted-foreground"
                        strokeWidth={1.5}
                    />
                </div>
                <div
                    class="text-xs text-muted-foreground flex items-center gap-3 sm:gap-6 px-3"
                >
                    <Skeleton class="h-8 w-8 rounded object-cover max-w-none" />
                    Offline / Not Listening
                </div>
            </div>
        {/if}

        {#if spotify.topTracks && spotify.topTracks.length > 0}
            <Collapsible.Root class="w-full">
                <div
                    class="grid grid-cols-[25%_70%_5%] sm:grid-cols-[15%_10%_70%_5%] items-center group rounded-md transition-colors px-3"
                >
                    <p class="text-xs text-muted-foreground hidden sm:flex">
                        Top Tracks
                    </p>
                    <div class="flex items-center gap-3">
                        <div
                            class="w-4 text-center text-xs font-light text-muted-foreground"
                        >
                            1
                        </div>
                        <div class="sm:hidden h-8 w-8">
                            {#if spotify.topTracks[0].coverImage}
                                <img
                                    src={spotify.topTracks[0].coverImage.url}
                                    alt="art"
                                    class="h-8 w-8 rounded object-cover"
                                />
                            {/if}
                        </div>
                    </div>
                    <a
                        class="group-hover:underline flex items-center gap-3 px-3"
                        href={spotify.topTracks[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div class="hidden sm:block h-8 w-8">
                            {#if spotify.topTracks[0].coverImage}
                                <img
                                    src={spotify.topTracks[0].coverImage.url}
                                    alt="art"
                                    class="h-8 w-8 rounded object-cover max-w-none"
                                />
                            {/if}
                        </div>
                        <div class="w-full sm:px-3">
                            <p class="font-light text-sm">
                                {spotify.topTracks[0].title}
                            </p>
                            <p class="text-xs text-muted-foreground">
                                {spotify.topTracks[0].artist}
                            </p>
                        </div>
                    </a>
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
                <Collapsible.Content class="mt-4">
                    {#each spotify.topTracks.slice(1, 10) as track, i}
                        <a
                            href={track.url}
                            class="grid grid-cols-[25%_70%_5%] sm:grid-cols-[15%_10%_70%_5%] items-center pb-4 group rounded-md px-3 text-baseline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p class="hidden sm:flex">&nbsp;</p>
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-4 text-center text-xs font-light text-muted-foreground"
                                >
                                    {i + 2}
                                </div>
                                <div class="sm:hidden">
                                    {#if track.coverImage}<img
                                            src={track.coverImage.url}
                                            alt="art"
                                            class="h-8 w-8 rounded object-cover"
                                        />{/if}
                                </div>
                            </div>
                            <div
                                class="group-hover:underline flex items-center gap-3 px-3"
                            >
                                <div class="hidden sm:block">
                                    {#if track.coverImage}<img
                                            src={track.coverImage.url}
                                            alt="art"
                                            class="h-8 w-8 rounded object-cover max-w-none"
                                        />{/if}
                                </div>
                                <div class="w-full sm:px-3">
                                    <p class="font-light text-sm">
                                        {track.title}
                                    </p>
                                    <p class="text-xs text-muted-foreground">
                                        {track.artist}
                                    </p>
                                </div>
                            </div>
                        </a>
                    {/each}
                </Collapsible.Content>
            </Collapsible.Root>
        {/if}
    </div>
</div>
