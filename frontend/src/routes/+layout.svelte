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
    <header
        class="container max-w-2xl bg-background flex justify-end py-4 px-0 rounded-full"
    >
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

    <div class="flex-1 w-full container flex flex-col my-8">
        <Profile />

        <main
            class="max-w-2xl mx-auto overflow-y-auto flex justify-center items-start w-full"
        >
            {@render children?.()}
        </main>
    </div>

    <footer
        class="max-w-2xl container mx-auto w-full flex justify-between items-center py-4 px-3"
    >
        <p class="text-xs md:text-sm text-muted-foreground">
            &copy; Juhun Park
        </p>
        <a
            href="https://github.com/juhun32/portfolio"
            class="hover:text-primary hover:underline text-xs md:text-sm text-muted-foreground"
        >
            <Github />
        </a>
    </footer>
</div>
