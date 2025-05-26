<script lang="ts">
    import "../app.css";
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
        "AI&ML Enthusiast",
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

<svelte:head>
    <title>Juhun Park</title>
    <meta name="description" content="Juhun Park Portfolio" />
</svelte:head>

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
                        class="ml-8 rounded-full border border-stone-300 dark:border-stone-800 overflow-hidden dark:bg-white"
                    >
                        <Avatar className="h-6" />
                    </div>
                    <p
                        class="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 px-3 py-2 text-base sm:text-lg"
                    >
                        Juhun Park
                    </p>
                </a>
                <div class="flex">
                    <div class="flex items-center gap-2 mr-3">
                        <Button
                            onclick={toggleMode}
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
            class="w-3/4 sm:w-4/5 lg:p-8 flex flex-col lg:grid lg:grid-cols-[3fr_4fr] items-center py-4 md:py-8 md:py-10 lg:py-12 border-x border-dashed border-stone-300 dark:border-stone-800"
        >
            <div class="flex justify-center items-start gap-1 p-4 md:p-8">
                <!-- <div class="flex flex-col items-baseline"> -->
                <!-- <CornerUpRight class="w-3 text-stone-400" /> -->
                <!-- <p
                        class="text-xs text-stone-400"
                        style="writing-mode: vertical-rl;"
                    >
                        my beautiful girlfriend's favorite picture of me
                    </p> -->
                <!-- </div> -->
                <img
                    src={Profile}
                    alt="Profile"
                    class="h-[280px] w-[210px] aspect-[3/4] object-cover p-1 border rounded-xl overflow-hidden"
                />
            </div>
            <div
                class="flex flex-col items-start px-4 md:px-8 gap-2 py-4 md:py-0"
            >
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
                <!-- <p class="text-sm sm:text-xl">
                    Hello! I am currently a student of George Mason University,
                    studying computer science and artificial intelligence. I am
                    interested in machine learning application in healthcare
                    industry.
                </p> -->
                <div class="space-y-2 pt-4">
                    <div
                        class="grid grid-cols-[2fr_1fr_12fr] md:grid-cols-[1fr_3fr_1fr_12fr] items-center gap-2 text-sm md:text-base"
                    >
                        <Phone class="h-4 w-4" />
                        <a href="tel:+12029244546" class="hidden md:flex"
                            >Phone</a
                        >
                        <Separator orientation="vertical" class="h-4 md:mx-2" />
                        <a href="tel:+12029244546">(202) 924 - 4546</a>
                    </div>
                    <div
                        class="grid grid-cols-[2fr_1fr_12fr] md:grid-cols-[1fr_3fr_1fr_12fr] items-center gap-2 text-sm md:text-base"
                    >
                        <Linkedin className="h-4 w-4" />
                        <a
                            href="https://www.linkedin.com/in/juhun-park/"
                            class="hidden md:flex"
                        >
                            LinkedIn
                        </a>
                        <Separator orientation="vertical" class="h-4 md:mx-2" />
                        <a href="https://www.linkedin.com/in/juhun-park/">
                            linkedin.com/in/juhun-park/
                        </a>
                    </div>
                    <div
                        class="grid grid-cols-[2fr_1fr_12fr] md:grid-cols-[1fr_3fr_1fr_12fr] items-center gap-2 text-sm md:text-base"
                    >
                        <Mails class="h-4 w-4" />
                        <a
                            href="mailto:juhunpark32@gmail.com"
                            class="hidden md:flex"
                        >
                            Email
                        </a>
                        <Separator orientation="vertical" class="h-4 md:mx-2" />
                        <a href="mailto:juhunpark32@gmail.com">
                            juhunpark32@gmail.com
                        </a>
                    </div>
                    <div
                        class="grid grid-cols-[2fr_1fr_12fr] md:grid-cols-[1fr_3fr_1fr_12fr] items-center gap-2 text-sm md:text-base"
                    >
                        <Github className="h-4 w-4" /><a
                            href="https://www.github.com/juhun32"
                            class="hidden md:flex"
                        >
                            GitHub
                        </a>
                        <Separator orientation="vertical" class="h-4 md:mx-2" />
                        <a href="https://www.github.com/juhun32">
                            github.com/juhun32
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div
        class="flex justify-center items-center border-y border-dashed border-stone-300 dark:border-stone-800"
    >
        <div
            class="p-4 md:p-8 bg-background w-3/4 sm:w-4/5 border-x border-dashed border-stone-300 dark:border-stone-800"
        >
            <div
                class="md:px-4 flex flex-col md:flex-row justify-between md:items-center gap-2"
            >
                <div class="flex md:flex-col items-baseline gap-2">
                    <h2 class="text-lg font-semibold tracking-tight">Resume</h2>
                    <p class="text-xs md:text-sm text-muted-foreground">
                        Last updated: May 19, 2025
                    </p>
                </div>
                <a
                    href="https://github.com/juhun32/resume"
                    class="flex items-center gap-2 text-lg font-semibold tracking-tight"
                >
                    <Button variant="outline" class="gap-2"
                        ><Download class="h-4 w-4" />Resume</Button
                    >
                </a>
            </div>
        </div>
    </div>

    <main class="bg-background overflow-auto">
        {@render children?.()}
    </main>

    <footer class="flex justify-center">
        <div
            class="w-3/4 sm:w-4/5 px-4 md:px-8 py-5 border-x border-dashed border-stone-300 dark:border-stone-800"
        >
            <p class="md:px-4 text-xs md:text-sm text-muted-foreground">
                Built by Juhun Park <a
                    href="https://github.com/juhun32/portfolio"
                    class="hover:text-red-500 hover:underline decoration-red-500"
                    >[GitHub]</a
                >
            </p>
        </div>
    </footer>
</div>
