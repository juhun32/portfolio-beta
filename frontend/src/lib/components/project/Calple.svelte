<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Drawer from "$lib/components/ui/drawer/index.js";

    import calple_dark from "$lib/assets/calple_dark1.png";
    import calple_light from "$lib/assets/calple_light1.png";

    import { File, MoveUpRight } from "lucide-svelte";

    import { mode } from "mode-watcher";
    $: isDarkMode = $mode === "dark";

    const card = [
        {
            title: "calple.date",
            link: "https://calple.date",
            github: "https://github.com/juhun32/calple",
            table: [
                {
                    tech: "Next.js & Vercel",
                    purpose: "Frontend Development",
                    results: "Responsive, beautiful, and modern design.",
                },
                {
                    tech: "Python & Firestore",
                    purpose: "REST API & Storage",
                    results:
                        "Front-facing REST API for authentication, and data analytics.",
                },
                {
                    tech: "Docker & GCP & Nginx",
                    purpose: "Deployment",
                    results:
                        "Containerized, scalable, and fault-tolerant deployment across VM instances and serverless functions.",
                },
            ],
        },
    ];
</script>

<div class="p-4 rounded-lg w-full">
    <div class="w-full flex items-center justify-between">
        <div
            class="w-full flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
            <h2 class="text-lg font-semibold tracking-tight">
                {card[0].title}
            </h2>
            <div class="flex items-center gap-4">
                <Drawer.Root>
                    <Drawer.Trigger>
                        <Button
                            variant="outline"
                            size="sm"
                            class="text-xs sm:text-sm"
                        >
                            <File class="w-4 h-4 mr-2" />
                            Tech Stack
                        </Button>
                    </Drawer.Trigger>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Description>
                                <div class="flex items-center justify-between">
                                    <Tabs.Root
                                        value={card[0].title}
                                        class="w-full"
                                    >
                                        {#each card as card}
                                            <Tabs.Content
                                                value={card.title}
                                                class="mt-4 px-8"
                                            >
                                                <Card.Root class="w-full">
                                                    <Card.Content>
                                                        {#if card.table}
                                                            <Table.Root
                                                                class="text-xs sm:text-sm"
                                                            >
                                                                <Table.Header>
                                                                    <Table.Row>
                                                                        <Table.Head
                                                                            class="w-1/2 sm:w-1/4"
                                                                            >Tech</Table.Head
                                                                        >
                                                                        <Table.Head
                                                                            class="sm:w-1/4 h-12 items-center"
                                                                            >Purpose</Table.Head
                                                                        >
                                                                        <Table.Head
                                                                            class="hidden sm:flex w-1/2"
                                                                            >Results</Table.Head
                                                                        >
                                                                    </Table.Row>
                                                                </Table.Header>
                                                                <Table.Body>
                                                                    {#each card.table as feature, j (j)}
                                                                        <Table.Row
                                                                        >
                                                                            <Table.Cell
                                                                                class="text-left p-2 px-4 sm:p-4 font-medium"
                                                                                >{feature.tech}</Table.Cell
                                                                            >
                                                                            <Table.Cell
                                                                                class="text-left p-2 px-4 sm:p-4"
                                                                                >{feature.purpose}</Table.Cell
                                                                            >
                                                                            <Table.Cell
                                                                                class="hidden sm:flex"
                                                                                >{feature.results}</Table.Cell
                                                                            >
                                                                        </Table.Row>
                                                                    {/each}
                                                                </Table.Body>
                                                            </Table.Root>
                                                        {/if}
                                                    </Card.Content>
                                                </Card.Root>
                                            </Tabs.Content>
                                        {/each}
                                    </Tabs.Root>
                                </div>
                            </Drawer.Description>
                        </Drawer.Header>
                        <Drawer.Footer class="px-12">
                            <Drawer.Close>
                                <Button variant="outline" class="w-full"
                                    >Close</Button
                                >
                            </Drawer.Close>
                        </Drawer.Footer>
                    </Drawer.Content>
                </Drawer.Root>
                <Button
                    href={card[0].link}
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    class="m-0 text-xs sm:text-sm"
                >
                    <MoveUpRight class="w-4 h-4 mr-2" />Visit
                </Button>
            </div>
        </div>
    </div>
    <Separator class="my-4" />
    <div class="w-full flex flex-col gap-4 justify-between">
        <div
            class="text-xs md:text-sm border border-dashed border-stone-300 dark:border-stone-800 p-4 rounded-lg"
        >
            Platform for every couples to make their relationship more
            beautiful. Customizable shared calendar, to-do list for couples, and
            relationship analytics.
            <p class="underline">
                Still in development, anticipated to be released in upcoming
                months.
            </p>
        </div>
        <div class="gap-4">
            <div class="flex items-center justify-end">
                {#if isDarkMode}
                    <img
                        src={calple_dark}
                        alt={card[0].title}
                        class="border rounded-lg aspect-[16/9] object-cover"
                    />
                {:else}
                    <img
                        src={calple_light}
                        alt={card[0].title}
                        class="border rounded-lg aspect-[16/9] object-cover"
                    />
                {/if}
            </div>
        </div>
    </div>
</div>
