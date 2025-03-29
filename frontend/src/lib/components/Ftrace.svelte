<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import thumb from "$lib/assets/thumb_ftrace.png";

    import { MoveUpRight } from "lucide-svelte";

    const card = [
        {
            title: "InsightLegi",
            description: "",
            link: "https://copium.dev",
            github: "https://github.com/copium-dev/copium",
            table: [
                {
                    tech: "React",
                    purpose: "Frontend Development",
                    results:
                        "Responsive and user friendly design. Easy to use and navigate.",
                },
                {
                    tech: "Flask & PostgreSQL",
                    purpose: "REST API",
                    results:
                        "Front-facing REST API for authentication and data analytics.",
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

<div class="hidden md:block">
    <div
        class="flex justify-center items-center border-b border-dashed border-stone-300 dark:border-stone-800"
    >
        <div
            class="bg-background w-3/4 p-8 sm:w-4/5 border-x border-dashed border-stone-300 dark:border-stone-800"
        >
            <Tabs.Root value="about" class="space-y-6 mx-4">
                <div class="space-between flex items-center">
                    <Tabs.List>
                        <Tabs.Trigger value="about" class="relative"
                            >About</Tabs.Trigger
                        >
                        <Tabs.Trigger value="details">Details</Tabs.Trigger>
                    </Tabs.List>
                </div>
                <Tabs.Content
                    value="about"
                    class="border-none pr-4 outline-none"
                >
                    <div class="w-full flex items-center justify-between">
                        <div class="w-full flex items-center justify-between">
                            <h2 class="text-2xl font-semibold tracking-tight">
                                ftrace
                            </h2>
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
                    <div class="flex flex-col gap-8">
                        <p>
                            A comprehensive F1 driver statistics system,
                            featuring real-time data retrieval and data
                            visualization, driver standings and championship
                            points from OpenF1 APIs. Features informative page
                            where one can learn more about motor racing and F1.
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
                                                <Table.Root
                                                    class="text-xs sm:text-sm"
                                                >
                                                    <Table.Header>
                                                        <Table.Row>
                                                            <Table.Head
                                                                class="sm:w-1/4"
                                                                >Tech</Table.Head
                                                            >
                                                            <Table.Head
                                                                class="sm:w-1/4"
                                                                >Purpose</Table.Head
                                                            >
                                                            <Table.Head
                                                                >Results</Table.Head
                                                            >
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
        </div>
    </div>
</div>
