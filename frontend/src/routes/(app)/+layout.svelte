<script lang="ts">
    import "../../app.css";
    let { children } = $props();
    import { ModeWatcher } from "mode-watcher";
    import { toggleMode } from "mode-watcher";

    import { Separator } from "$lib/components/ui/separator";

    import { Moon } from "lucide-svelte";
    import { SunMedium } from "lucide-svelte";

    import { Button } from "$lib/components/ui/button/index.js";
    import Combobox from "$lib/components/Combobox/Combobox.svelte";

    import Avatar from "$lib/components/Avatar/Avatar.svelte";

    import Projects from "../(app)/projects/+page@(app).svelte";
    import Profile from "../(home)/images/profile.png";

    import { CornerUpRight } from "lucide-svelte";

    // changing text
    import { onMount, onDestroy } from "svelte";
    import { fade } from "svelte/transition";

    let texts = ["Software Engineer", "Racing Enthusiast", "College Student"];
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
                    <div class="ml-8 rounded-lg border border-stone-950 overflow-hidden dark:bg-white">
                        <Avatar className="h-7" />
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
                    <CornerUpRight class="w-3 text-stone-400"/>
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

    <main class="bg-background overflow-auto">
        {@render children()}
    </main>
    
    <footer class="flex justify-center">
        <div
            class="w-3/4 sm:w-4/5 p-6 border-x border-dashed border-stone-300 dark:border-stone-800"
        >
            <p class="text-sm text-stone-500">Built by Juhun Park <a href="https://github.com/juhun32/portfolio" class="hover:text-pink-500/50 hover:underline decoration-pink-500/50">[GitHub]</a></p>
        </div>
    </footer>
</div>