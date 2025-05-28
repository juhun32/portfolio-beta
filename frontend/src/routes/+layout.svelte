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
</script>

<svelte:head>
    <title>Juhun Park</title>
    <meta name="description" content="Juhun Park Portfolio" />
</svelte:head>

<ModeWatcher />
<div class="min-h-screen flex flex-col">
    <header
        class="bg-background flex justify-center border-b border-dashed border-stone-300 dark:border-stone-800"
    >
        <div
            class="w-full container backdrop-blur-sm py-2 px-8 flex items-center justify-between border-x border-dashed border-stone-300 dark:border-stone-800"
        >
            <a
                href="/"
                aria-label="Home"
                class="group flex items-center hover:opacity-80 transition-all"
            >
                <img src={Logo} alt="Logo" class="h-6 w-6 object-cover" />

                <p class="text-base sm:text-lg font-bold px-4">Juhun Park</p>
            </a>
            <div class="flex items-center gap-2">
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
    </header>

    <div
        class="flex-1 w-full container flex flex-col lg:grid lg:grid-cols-[1fr_3fr] xl:grid-cols-[3fr_7fr] border-x border-dashed border-stone-300 dark:border-stone-800"
    >
        <div class="flex flex-col justify-center gap-4 lg:items-end">
            <Profile />
        </div>

        <main
            class="bg-background overflow-auto py-4 sm:py-8 flex justify-center items-start"
        >
            {@render children?.()}
        </main>
    </div>

    <footer
        class="flex justify-center border-t border-dashed border-stone-300 dark:border-stone-800"
    >
        <div
            class="container flex justify-between py-4 border-x border-dashed border-stone-300 dark:border-stone-800"
        >
            <p class="text-xs md:text-sm text-muted-foreground">
                Built by Juhun Park
            </p>
            <a
                href="https://github.com/juhun32/portfolio"
                class="hover:text-yellow-700 hover:underline decoration-yellow-700 text-xs md:text-sm text-muted-foreground"
            >
                [GitHub]
            </a>
        </div>
    </footer>
</div>
