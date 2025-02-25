<script lang="ts">
    import "../../app.css";
    let { children } = $props();
    import { ModeWatcher } from "mode-watcher";
    import { toggleMode } from "mode-watcher";

    import { Separator } from "$lib/components/ui/separator";

    import { Button } from "$lib/components/ui/button";

    import { Moon } from "lucide-svelte";
    import { SunMedium } from "lucide-svelte";
</script>

<ModeWatcher />
<div class="min-h-screen grid grid-rows-[auto_1fr]">
    <header class="bg-background z-50">
        <div class="mx-auto flex items-center justify-between p-6 lg:px-8">
            <div class="flex-none">
                <a
                    href="/"
                    aria-label="Home"
                    class="group hover:opacity-80 transition-all"
                >
                    <p
                        class="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-xs sm:text-sm"
                    >
                        svg logo
                    </p>
                </a>
            </div>

            <div class="flex-none">
                <div class="flex items-center gap-2 sm:gap-4 mx-4 sm:mx-8">
                    <Button
                        href="/about"
                        variant="ghost"
                        class="text-xs sm:text-sm">about</Button
                    >
                    <Separator orientation="vertical" class="h-4 sm:h-6" />
                    <Button
                        href="/project"
                        variant="ghost"
                        class="text-xs sm:text-sm">project</Button
                    >
                    <Separator orientation="vertical" class="h-4 sm:h-6" />
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
    </header>
    <main class="bg-background overflow-auto">
        {@render children()}
    </main>
</div>
