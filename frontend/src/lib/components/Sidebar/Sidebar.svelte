<script lang="ts">
    import { page } from "$app/stores";
    import { cn } from "$lib/utils.js";
    import { Button } from "$lib/components/ui/button/index.js";

    // icons
    import { Scale } from "lucide-svelte";
    import { GraduationCap } from "lucide-svelte";
    import { Laptop } from "lucide-svelte";
    import { Car } from "lucide-svelte";
    import { ChartSpline } from "lucide-svelte";

    let className: string | null | undefined = undefined;
    export { className as class };

    // Helper function to check if current path matches the href
    $: isActive = (href: string) => $page.url.pathname === href;
</script>

<div class={cn("w-1/4", className)}>
    <div class="space-y-4 p-8">
        <h2 class="px-4 text-lg font-semibold tracking-tight">Experience</h2>
        <div class="space-y-1">
            <Button
                variant={isActive("/experience/insightlegi")
                    ? "default"
                    : "ghost"}
                class="w-full justify-start"
                href="/experience/insightlegi"
            >
                <Scale class="h-4 mr-1" />
                InsightLegi
            </Button>
            <Button
                variant={isActive("/experience/eduverse") ? "default" : "ghost"}
                class="w-full justify-start"
                href="/experience/eduverse"
            >
                <GraduationCap class="h-4 mr-1" />
                Eduverse
            </Button>
            <Button
                variant={isActive("/experience/himedia") ? "default" : "ghost"}
                class="w-full justify-start"
                href="/experience/himedia"
            >
                <Laptop class="h-4 mr-1" />
                Himedia
            </Button>
        </div>

        <h2 class="px-4 text-lg font-semibold tracking-tight">Projects</h2>
        <div class="min-h-[300px] space-y-1">
            <Button
                variant={isActive("/projects/copium") ? "default" : "ghost"}
                class="w-full justify-start"
                href="/projects/copium"
            >
                <ChartSpline class="h-4 mr-1" />
                copium.dev
            </Button>
            <Button
                variant={isActive("/projects/ftrace") ? "default" : "ghost"}
                class="w-full justify-start"
                href="/projects/ftrace"
            >
                <Car class="h-4 mr-1" />
                ftrace
            </Button>
        </div>
    </div>
</div>
