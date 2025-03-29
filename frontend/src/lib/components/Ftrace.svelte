<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import ftrace1 from "$lib/assets/ftrace1.png";

    import { MoveUpRight } from "lucide-svelte";

    const card = [
        {
            title: "InsightLegi",
            description: "",
            link: "https://copium.dev",
            github: "https://github.com/copium-dev/copium",
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

<Tabs.Root value="about" class="space-y-6 space-x-4 p-8">
    <div class="space-between flex items-center px-4">
        <Tabs.List>
            <Tabs.Trigger value="about" class="relative">About</Tabs.Trigger>
            <Tabs.Trigger value="details">Details</Tabs.Trigger>
        </Tabs.List>
    </div>
    <Tabs.Content value="about" class="border-none pr-4 outline-none">
        <div class="w-full flex items-center justify-between">
            <div class="w-full flex items-center justify-between">
                <h2 class="text-2xl font-semibold tracking-tight">ftrace</h2>
            </div>
            <Button
                href=""
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm m-0"
            >
                Visit Website
                <MoveUpRight class="w-4 h-4 ml-2" />
            </Button>
        </div>
        <Separator class="my-4" />
        <div class="grid grid-cols-[2fr_1fr_1fr] gap-8">
            <p class="text-md border border-dashed border-stone-300 dark:border-stone-800 p-4 rounded-lg">
                A comprehensive F1 driver statistics system, featuring real-time
                data retrieval and data visualization, driver standings and
                championship points from OpenF1 APIs. Features informative page
                where one can learn more about motor racing and F1.
            </p>
            <div class="flex items-center justify-end">
                <img
                    src={ftrace1}
                    alt="copium.dev"
                    class="border rounded-lg"
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
