<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Drawer from "$lib/components/ui/drawer/index.js";
    import ftrace1 from "$lib/assets/ftrace1.png";

    import { File, MoveUpRight } from "lucide-svelte";

    import { mode } from "mode-watcher";
    $: isDarkMode = $mode === "dark";

    const card = [
        {
            title: "ftrace",
            link: "https://github.com/juhun32/ftrace",
            github: "https://github.com/juhun32/ftrace",
            table: [
                {
                    tech: "React & Tailwind",
                    purpose: "Frontend Development",
                    results:
                        "Responsive and user friendly design. Easy to use and navigate.",
                },
                {
                    tech: "Redis",
                    purpose: "In-memory Caching",
                    results:
                        "Improved performance by 50% for frequently accessed data.",
                },
                {
                    tech: "AWS Lambda",
                    purpose: "Serverless Functions",
                    results:
                        "Efficient handling of serverless functions for authentication and data processing.",
                },
                {
                    tech: "Influx DB",
                    purpose: "Time-series Database",
                    results:
                        "Efficient storage and retrieval of time-series data for real-time analytics.",
                },
                {
                    tech: "GCP Pub/Sub",
                    purpose: "Messaging Service",
                    results:
                        "Decoupled and fault-tolerant messaging service for real-time data processing.",
                },
                {
                    tech: "Docker & GCP",
                    purpose: "Deployment",
                    results: "Containerized and scalable deployment.",
                },
            ],
        },
    ];
</script>

<div class="w-full flex items-center justify-between">
    <div
        class="w-full flex flex-col md:flex-row md:items-center justify-between gap-4"
    >
        <h2 class="text-xl font-semibold tracking-tight">{card[0].title}</h2>
        <div class="flex items-center gap-4">
            <Drawer.Root>
                <Drawer.Trigger>
                    <Button variant="outline" class="text-xs sm:text-sm">
                        <File class="w-4 h-4 mr-2" />
                        Tech Stack
                    </Button>
                </Drawer.Trigger>
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Description>
                            <div class="flex items-center justify-between">
                                <Tabs.Root value={card[0].title} class="w-full">
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
                                                                    <Table.Row>
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
                class="m-0 text-xs sm:text-sm"
            >
                <MoveUpRight class="w-4 h-4 mr-2" />Visit
            </Button>
        </div>
    </div>
</div>
<Separator class="my-4" />
<div class="md:grid md:grid-cols-[2fr_1fr] gap-4 justify-between">
    <p
        class="text-xs md:text-sm border border-dashed border-stone-300 dark:border-stone-800 p-4 rounded-lg"
    >
        Was a comprehensive F1 driver statistics system, featuring real-time
        data retrieval and data visualization, driver standings and championship
        points from OpenF1 APIs. Overhaul of project is under way.
    </p>
    <div class="hidden md:flex items-center justify-end">
        {#if isDarkMode}
            <img
                src={ftrace1}
                alt={card[0].title}
                class="border rounded-lg aspect-[16/9] object-cover"
            />
        {:else}
            <img
                src={ftrace1}
                alt={card[0].title}
                class="border rounded-lg aspect-[16/9] object-cover"
            />
        {/if}
    </div>
</div>
