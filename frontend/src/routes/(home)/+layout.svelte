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
</script>

<ModeWatcher />
<div class="min-h-screen">
    <header class="bg-background z-50 flex justify-center">
        <div
            class="fixed w-full mx-auto flex items-center justify-center lg:px-6 border-b border-dashed border-stone-300 dark:border-stone-800"
        >
            <div
                class="w-3/4 sm:w-4/5 backdrop-blur-md py-2 flex items-center justify-between"
            >
                <a
                    href="/home"
                    aria-label="Home"
                    class="group hover:opacity-80 transition-all"
                >
                    <p
                        class="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-xs sm:text-sm"
                    >
                        svg logo
                    </p>
                </a>
                <div class="flex">
                    <div class="flex items-center gap-2">
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
            <p class="text-sm text-stone-500">Built by Juhun Park</p>
        </div>
    </footer>
</div>
