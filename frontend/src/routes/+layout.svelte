<script lang="ts">
    import "../app.css";
    import { injectAnalytics } from '@vercel/analytics/sveltekit'
    let { children } = $props();

    // mode watcher
    import { ModeWatcher } from "mode-watcher";
    import { toggleMode } from "mode-watcher";

    // components
    import { Separator } from "$lib/components/ui/separator";
    import { Button } from "$lib/components/ui/button/index.js";

    // images
    import Profile from "$lib/assets/profile.png";

    // icons
    import Avatar from "$lib/components/svg/Avatar/Avatar.svelte";
    import Github from "$lib/components/svg/Github/Github.svelte";
    import { CornerUpRight } from "lucide-svelte";
    import { Moon } from "lucide-svelte";
    import { SunMedium } from "lucide-svelte";
    import { Phone } from "lucide-svelte";
    import { Mails } from "lucide-svelte";
    import { Download } from "lucide-svelte";

    // changing text
    import { onMount, onDestroy } from "svelte";
    import { fade } from "svelte/transition";
    import Linkedin from "$lib/components/svg/Linkedin/Linkedin.svelte";

    // changing text for the main page
    let texts = [
        "Software Engineer",
        "Racing Enthusiast",
        "College Student",
        "Machine Learning Enthusiast",
        "Full-stack Developer",
    ];
    let index = 0;
    let currentText = $state(texts[index]);
    let interval: number;

    onMount(() => {
        interval = setInterval(() => {
            index = (index + 1) % texts.length;
            currentText = texts[index];
        }, 5000); // Change text every 2 seconds
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<ModeWatcher />
<div class="min-h-screen">
    <header class="bg-background sticky top-0 z-50 flex justify-center">
        <div
            class="w-full mx-auto flex items-center justify-center border-b border-dashed border-stone-300 dark:border-stone-800"
        >
            <div
                class="w-3/4 sm:w-4/5 backdrop-blur-md py-2 flex items-center justify-between border-x border-dashed border-stone-300 dark:border-stone-800"
            >
                <a
                    href="/"
                    aria-label="Home"
                    class="group flex items-center hover:opacity-80 transition-all"
                >
                    <div
                        class="ml-8 rounded-full border border-stone-950 overflow-hidden dark:bg-white"
                    >
                        <Avatar className="h-6" />
                    </div>
                    <p
                        class="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 px-3 py-2 text-md sm:text-lg"
                    >
                        Juhun Park
                    </p>
                </a>
                <div class="flex">
                    <div class="flex items-center gap-2 mr-3">
                        <Button
                            on:click={toggleMode}
                            variant="ghost"
                            class="w-12 sm:w-16"
                            aria-label="Toggle theme"
                        >
                            <SunMedium class="dark:hidden" />
                            <Moon class="hidden dark:block" />
                            <span class="sr-only">Toggle theme</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="flex flex-col justify-center gap-4 items-center">
        <div
            class="w-3/4 sm:w-4/5 p-8 grid grid-cols-[1fr_2fr] items-center py-8 md:py-10 lg:py-12 border-x border-dashed border-stone-300 dark:border-stone-800"
        >
            <div class="flex justify-center items-start gap-1">
                <div class="flex flex-col items-baseline">
                    <CornerUpRight class="w-3 text-stone-400" />
                    <p
                        class="text-xs text-stone-400"
                        style="writing-mode: vertical-rl;"
                    >
                        my beautiful girlfriend's favorite picture of me
                    </p>
                </div>
                <img
                    src={Profile}
                    alt="Profile"
                    class="h-[280px] w-[210px] aspect-[3/4] object-cover p-1 border rounded-xl overflow-hidden"
                />
            </div>
            <div class="flex flex-col items-start pr-8 gap-3">
                <h1
                    class="flex items-baseline gap-2 text-2xl sm:text-4xl font-bold"
                >
                    Juhun Park <p class="text-sm">박주훈</p>
                </h1>
                {#key currentText}
                    <span
                        class="text-2xl sm:text-4xl font-bold text-yellow-900/80 dark:text-yellow-700/80"
                        in:fade={{ duration: 500 }}>{currentText}</span
                    >{/key}
                <p class="text-base sm:text-xl">
                    Hello! I am currently a student of George Mason University,
                    studying computer science and artificial intelligence. I am
                    interested in machine learning application in healthcare
                    industry.
                </p>
            </div>
        </div>
    </div>

    <div
        class="flex justify-center items-center border-y border-dashed border-stone-300 dark:border-stone-800"
    >
        <div
            class="p-8 bg-background w-3/4 sm:w-4/5 border-x border-dashed border-stone-300 dark:border-stone-800"
        >
            <div class="px-4 space-x-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-4">
                    <div class="flex items-center gap-2">
                        <Phone class="h-4 w-4" /><a href="tel:+12029244546"
                            >Phone</a
                        >
                        <Separator orientation="vertical" class="h-4 mx-2" />
                        <a href="tel:+12029244546">(202) 924 - 4546</a>
                    </div>
                    <div class="flex items-center gap-2">
                        <Linkedin className="h-4 w-4" /><a
                            href="https://www.linkedin.com/in/juhun-park/"
                            >LinkedIn</a
                        >
                        <Separator orientation="vertical" class="h-4 mx-2" />
                        <a href="https://www.linkedin.com/in/juhun-park/"
                            >https://www.linkedin.com/in/juhun-park/</a
                        >
                    </div>
                </div>
                <div class="space-y-4">
                    <div class="flex items-center gap-2">
                        <Mails class="h-4 w-4" /><a
                            href="mailto:juhunpark32@gmail.com">Email</a
                        >
                        <Separator orientation="vertical" class="h-4 mx-2" />
                        <a href="mailto:juhunpark32@gmail.com"
                            >juhunpark32@gmail.com</a
                        >
                    </div>
                    <div class="flex items-center gap-2">
                        <Github className="h-4 w-4" /><a
                            href="https://www.github.com/juhun32">GitHub</a
                        >
                        <Separator orientation="vertical" class="h-4 mx-2" />
                        <a href="https://www.github.com/juhun32"
                            >https://www.github.com/juhun32</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div
        class="flex justify-center items-center border-b border-dashed border-stone-300 dark:border-stone-800"
    >
        <div
            class="p-8 bg-background w-3/4 sm:w-4/5 border-x border-dashed border-stone-300 dark:border-stone-800"
        >
            <div class="px-4 flex justify-between items-center">
                <div class="flex flex-col">
                    <h2 class="text-lg font-semibold tracking-tight">Resume</h2>
                    <p class="text-sm text-muted-foreground">
                        Last updated: March 1, 2025
                    </p>
                </div>
                <a
                    href="/resume"
                    class="flex items-center gap-2 text-lg font-semibold tracking-tight"
                >
                    <Button variant="default" class="gap-2"
                        ><Download class="h-4 w-4" />Download Resume</Button
                    >
                </a>
            </div>
        </div>
    </div>

    <main class="bg-background overflow-auto">
        {@render children()}
    </main>

    <footer class="flex justify-center">
        <div
            class="w-3/4 sm:w-4/5 px-8 py-5 border-x border-dashed border-stone-300 dark:border-stone-800"
        >
            <p class="px-4 text-sm text-muted-foreground">
                Built by Juhun Park <a
                    href="https://github.com/juhun32/portfolio"
                    class="hover:text-red-500 hover:underline decoration-red-500"
                    >[GitHub]</a
                >
            </p>
        </div>
    </footer>
</div>
