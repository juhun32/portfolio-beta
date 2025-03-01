<script lang="ts">
    import { page } from "$app/stores";
    import { cn } from "$lib/utils.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";

    let className: string | null | undefined = undefined;
    export { className as class };

    // Helper function to check if current path matches the href
    $: isActive = (href: string) => $page.url.pathname === href;
</script>

<div class={cn("w-1/4", className)}>
    <div class="space-y-4 p-8">
        <div class="px-3 py-2">
            <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">
                Experience
            </h2>
            <div class="space-y-1">
                <Button
                    variant={isActive("/experience/insightlegi")
                        ? "secondary"
                        : "ghost"}
                    class="w-full justify-start"
                    href="/experience/insightlegi"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2 h-4 w-4"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="10 8 16 12 10 16 10 8" />
                    </svg>
                    InsightLegi
                </Button>
                <Button
                    variant={isActive("/experience/eduverse")
                        ? "secondary"
                        : "ghost"}
                    class="w-full justify-start"
                    href="/experience/eduverse"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2 h-4 w-4"
                    >
                        <rect width="7" height="7" x="3" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="14" rx="1" />
                        <rect width="7" height="7" x="3" y="14" rx="1" />
                    </svg>
                    Eduverse
                </Button>
                <Button
                    variant={isActive("/experience/himedia")
                        ? "secondary"
                        : "ghost"}
                    class="w-full justify-start"
                    href="/experience/himedia"
                >
                    Himedia
                </Button>
            </div>
        </div>
        <div class="px-3 py-2">
            <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">
                Projects
            </h2>
            <div class="space-y-1">
                <Button variant="ghost" class="w-full justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2 h-4 w-4"
                    >
                        <path d="M21 15V6" />
                        <path
                            d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                        />
                        <path d="M12 12H3" />
                        <path d="M16 6H3" />
                        <path d="M12 18H3" />
                    </svg>
                    Playlists
                </Button>
                <Button variant="ghost" class="w-full justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2 h-4 w-4"
                    >
                        <circle cx="8" cy="18" r="4" />
                        <path d="M12 18V2l7 4" />
                    </svg>
                    Songs
                </Button>
                <Button variant="ghost" class="w-full justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2 h-4 w-4"
                    >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    Made for You
                </Button>
                <Button variant="ghost" class="w-full justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2 h-4 w-4"
                    >
                        <path
                            d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"
                        />
                        <circle cx="17" cy="7" r="5" />
                    </svg>
                    Artists
                </Button>
                <Button variant="ghost" class="w-full justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2 h-4 w-4"
                    >
                        <path d="m16 6 4 14" />
                        <path d="M12 6v14" />
                        <path d="M8 8v12" />
                        <path d="M4 4v16" />
                    </svg>
                    Albums
                </Button>
            </div>
        </div>
        <div class="py-2">
            <ScrollArea class="h-full px-1">
                <div class="space-y-1 p-2">
                    <Button
                        variant={isActive("/") ? "secondary" : "ghost"}
                        class="w-full justify-start"
                        href="/"
                    >
                        Contact
                    </Button>
                </div>
            </ScrollArea>
        </div>
    </div>
</div>
