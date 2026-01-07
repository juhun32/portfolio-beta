<script lang="ts">
    import "../app.css";
    let { children } = $props();

    // mode watcher
    import { ModeWatcher } from "mode-watcher";
    import { toggleMode } from "mode-watcher";

    // components
    import { Button } from "$lib/components/ui/button/index.js";

    // icons
    import { Moon, SunMedium } from "lucide-svelte";

    // image
    import Github from "$lib/components/svg/Github/Github.svelte";
</script>

<svelte:head>
    <title>Juhun Park</title>
    <meta name="description" content="Juhun Park Portfolio" />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<ModeWatcher />
<div
    class="h-dvh w-full flex flex-col overflow-hidden sm:bg-secondary dark:bg-secondary sm:dark:bg-card"
>
    <header class="container flex justify-end py-2 rounded-full flex-none">
        <Button
            onclick={toggleMode}
            variant="ghost"
            size="icon"
            class="w-8 h-8 rounded-full"
            aria-label="Toggle theme"
        >
            <SunMedium class="dark:hidden" />
            <Moon class="hidden dark:block" />
            <span class="sr-only">Toggle theme</span>
        </Button>
    </header>

    <main class="flex-1 min-h-0 w-full relative">
        {@render children?.()}
    </main>

    <footer
        class="container mx-auto w-full flex justify-between items-center py-2 flex-none"
    >
        <p class="text-xs md:text-sm text-muted-foreground">
            &copy; Juhun Park
        </p>
        <a
            href="https://github.com/juhun32/portfolio"
            class="hover:text-primary hover:underline text-xs text-muted-foreground flex items-center gap-1 border dark:border-muted-foreground rounded-full px-1 h-5"
        >
            <Github /> Github
        </a>
    </footer>
</div>

<style>
    :global(body) {
        font-family: "Inter", sans-serif;
    }
</style>
