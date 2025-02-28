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
                    href="/home"
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
                        <!-- <Combobox /> -->
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
