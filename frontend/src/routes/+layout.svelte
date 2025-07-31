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
    import Profile from "$lib/components/Profile.svelte";

    // image
    import Logo from "$lib/assets/logo.png";
    import Github from "$lib/components/svg/Github/Github.svelte";
</script>

<svelte:head>
    <title>Juhun Park</title>
    <meta name="description" content="Juhun Park Portfolio" />
</svelte:head>

<ModeWatcher />
<div class="min-h-screen flex flex-col">
    <header class="container max-w-xl bg-background flex justify-end py-4 px-0">
        <Button
            onclick={toggleMode}
            variant="outline"
            size="icon"
            class="rounded-full"
            aria-label="Toggle theme"
        >
            <SunMedium class="dark:hidden" />
            <Moon class="hidden dark:block" />
            <span class="sr-only">Toggle theme</span>
        </Button>
    </header>

    <div class="flex-1 w-full container flex flex-col">
        <Profile />

        <main
            class="max-w-xl mx-auto overflow-y-auto my-4 sm:my-8 flex justify-center items-start w-full"
        >
            {@render children?.()}
        </main>
    </div>

    <footer
        class="max-w-xl container mx-auto w-full flex justify-between items-center py-4 px-0"
    >
        <p class="text-xs md:text-sm text-muted-foreground">
            &copy; Juhun Park
        </p>
        <a
            href="https://github.com/juhun32/portfolio"
            class="hover:text-yellow-700 hover:underline decoration-yellow-700 text-xs md:text-sm text-muted-foreground"
        >
            <Github />
        </a>
    </footer>
</div>
