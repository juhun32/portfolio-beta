<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Drawer from "$lib/components/ui/drawer/index.js";

    import copium_dark from "$lib/assets/copium_dark.png";
    import copium_light from "$lib/assets/copium_light.png";

    import { File, MoveUpRight } from "lucide-svelte";

    import { mode } from "mode-watcher";
    $: isDarkMode = $mode === "dark";

    const card = [
        {
            title: "copium.dev",
            link: "https://copium.dev",
            github: "https://github.com/copium-dev/copium",
            table: [
                {
                    tech: "SvelteKit & Vercel",
                    purpose: "Frontend",
                    results:
                        "Responsive, beautiful, and accessible design with SSR for performance.",
                },
                {
                    tech: "Algolia",
                    purpose: "Search Engine",
                    results:
                        "Real-time search and filtering on internship postings or user's tracked applications.",
                },
                {
                    tech: "Go & Firestore",
                    purpose: "REST API & Storage",
                    results:
                        "Front-facing REST API for authentication, Algolia searching, and data analytics.",
                },
                {
                    tech: "Cloud Pub/Sub",
                    purpose: "Messaging Service",
                    results:
                        "Decoupled and fault-tolerant Algolia indexing and BigQuery analytics with a strong consistency model.",
                },
                {
                    tech: "BigQuery & CQRS",
                    purpose: "Real-time Analytics",
                    results:
                        "Personalized insights by tracking monthly trends, leveraging a denormalized schema and CQRS for fast queries.",
                },
                {
                    tech: "Docker & GCP & Nginx",
                    purpose: "Deployment",
                    results:
                        "Containerized, scalable, and fault-tolerant deployment across VM instances and serverless functions.",
                },
                {
                    tech: "Python",
                    purpose: "Data Scraping",
                    results:
                        "Scheduled tech internship posting scraping for focused and fresh data.",
                },
            ],
        },
    ];
</script>

<div class="w-full flex items-center justify-between">
    <div
        class="w-full flex flex-col md:flex-row md:items-center justify-between gap-4"
    >
        <h2 class="text-lg font-semibold tracking-tight">{card[0].title}</h2>
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
                                            class="px-8"
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
<div class="w-full flex flex-col gap-4 sm:gap-8 justify-between">
    <p
        class="text-xs md:text-sm border border-dashed border-stone-300 dark:border-stone-800 p-4 rounded-lg"
    >
        Tech internship management platform ensuring efficient workflows with a
        never-stale job board, real-time insights, and powerful application
        management tools including search and filtering.
    </p>
    <div class="flex gap-4">
        <div class="items-center justify-end">
            {#if isDarkMode}
                <img
                    src={copium_dark}
                    alt={card[0].title}
                    class="border rounded-lg aspect-[16/9] object-cover"
                />
            {:else}
                <img
                    src={copium_light}
                    alt={card[0].title}
                    class="border rounded-lg aspect-[16/9] object-cover"
                />
            {/if}
        </div>
    </div>
</div>
