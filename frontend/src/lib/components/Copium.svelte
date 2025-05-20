<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Drawer from "$lib/components/ui/drawer/index.js";
    import copium1 from "$lib/assets/copium1.png";

    import { File, MoveUpRight } from "lucide-svelte";

    const card = [
        {
            title: "copium.dev",
            link: "https://copium.dev",
            github: "https://github.com/copium-dev/copium",
            table: [
                {
                    tech: "SvelteKit & Vercel",
                    purpose: "Frontend Development",
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
        <h2 class="text-xl font-semibold tracking-tight">copium.dev</h2>
        <div class="flex items-center gap-4">
            <Drawer.Root>
                <Drawer.Trigger asChild let:builder class="p-8">
                    <Button builders={[builder]} variant="outline">
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
                                                                        class="w-1/3 sm:w-1/4"
                                                                        >Tech</Table.Head
                                                                    >
                                                                    <Table.Head
                                                                        class="hidden sm:flex sm:w-1/4 h-12 items-center"
                                                                        >Purpose</Table.Head
                                                                    >
                                                                    <Table.Head
                                                                        class="w-2/3 sm:w-1/2"
                                                                        >Results</Table.Head
                                                                    >
                                                                </Table.Row>
                                                            </Table.Header>
                                                            <Table.Body>
                                                                {#each card.table as feature, j (j)}
                                                                    <Table.Row>
                                                                        <Table.Cell
                                                                            class="font-medium align-top"
                                                                            >{feature.tech}</Table.Cell
                                                                        >
                                                                        <Table.Cell
                                                                            class="hidden sm:flex"
                                                                            >{feature.purpose}</Table.Cell
                                                                        >
                                                                        <Table.Cell
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
                        <Drawer.Close asChild let:builder>
                            <Button builders={[builder]} variant="outline">
                                Close
                            </Button>
                        </Drawer.Close>
                    </Drawer.Footer>
                </Drawer.Content>
            </Drawer.Root>
            <Button
                href="https://copium.dev"
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm m-0"
            >
                <MoveUpRight class="w-4 h-4 mr-2" />Visit
                <p class="hidden md:flex ml-1">Website</p>
            </Button>
        </div>
    </div>
</div>
<Separator class="my-4" />
<div class="md:grid md:grid-cols-[2fr_1fr] gap-4 justify-between">
    <p
        class="text-xs md:text-sm border border-dashed border-stone-300 dark:border-stone-800 p-4 rounded-lg"
    >
        Tech internship management platform ensuring efficient workflows with a
        never-stale job board, real-time insights, and powerful application
        management tools including search and filtering.
    </p>
    <div class="flex gap-4">
        <div class="hidden md:flex items-center justify-end">
            <img src={copium1} alt="copium.dev" class="border rounded-lg" />
        </div>
        <!-- <div class="flex items-center justify-end">
            <img src={copium2} alt="copium.dev" class="border rounded-lg" />
        </div> -->
    </div>
</div>
