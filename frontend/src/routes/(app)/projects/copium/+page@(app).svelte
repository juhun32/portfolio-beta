<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import thumb from "$lib/assets/thumb_copium.png";

    import { MoveUpRight } from "lucide-svelte";

    const card = [
        {
            title: "InsightLegi",
            description: "",
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

<Tabs.Root value="about" class="space-y-6 mx-4">
    <div class="space-between flex items-center">
        <Tabs.List>
            <Tabs.Trigger value="about" class="relative">About</Tabs.Trigger>
            <Tabs.Trigger value="details">Details</Tabs.Trigger>
        </Tabs.List>
    </div>
    <Tabs.Content value="about" class="border-none pr-4 outline-none">
        <div class="w-full flex items-center justify-between">
            <div class="w-full flex items-center justify-between">
                <h2 class="text-2xl font-semibold tracking-tight">
                    copium.dev
                </h2>
                <Button
                    href="https://copium.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm m-0"
                >
                    Visit Website
                    <MoveUpRight class="w-4 h-4 ml-2" />
                </Button>
            </div>
        </div>
        <Separator class="my-4" />
        <div class="flex flex-col gap-8">
            <p>
                Tech internship management platform ensuring efficient workflows
                with a never-stale job board, real-time insights, and powerful
                application management tools including search and filtering.
            </p>
            <div class="flex items-center justify-start">
                <img
                    src={thumb}
                    alt="copium.dev"
                    class="w-1/2 border rounded-lg"
                />
            </div>
        </div>
    </Tabs.Content>
    <Tabs.Content
        value="details"
        class="flex-col border-none p-0 data-[state=active]:flex"
    >
        <div class="flex items-center justify-between">
            <Tabs.Root value={card[0].title} class="w-full">
                {#each card as card}
                    <Tabs.Content value={card.title} class="mt-4">
                        <Card.Root class="w-full">
                            <Card.Content>
                                {#if card.table}
                                    <Table.Root class="text-xs sm:text-sm">
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.Head class="sm:w-1/4"
                                                    >Tech</Table.Head
                                                >
                                                <Table.Head class="sm:w-1/4"
                                                    >Purpose</Table.Head
                                                >
                                                <Table.Head>Results</Table.Head>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            {#each card.table as feature, j (j)}
                                                <Table.Row>
                                                    <Table.Cell
                                                        class="font-medium"
                                                        >{feature.tech}</Table.Cell
                                                    >
                                                    <Table.Cell
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
    </Tabs.Content>
</Tabs.Root>
