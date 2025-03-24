<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { buttonVariants } from "$lib/components/ui/button";
    import * as Tabs from "$lib/components/ui/tabs/index.js";

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
                    results: "Data visualization dashboards, responsive design web application."
                },
                {
                    tech: "Go",
                    purpose: "REST API",
                    results: "Front-facing REST API for authentication",
                },
            ],
        }
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
            <div class="w-full space-y-1">
                <h2 class="text-2xl font-semibold tracking-tight">
                    InsightLegi
                </h2>
                <div class="w-full flex items-center justify-between">
                    <p class="text-sm">Software Engineer Intern</p>
                    <p class="text-sm">January 2024 - March 2025</p>
                </div>
            </div>
        </div>
        <Separator class="my-4" />
        <div class="">
            <ul class="space-y-3 list-disc pl-5">
                <li class="text-md">
                    Created data visualization dashboards for 15+ states, 30+
                    charts using Chart.js and React-Query while maintaining
                    sub500ms load time, resulting in 30% increase in conversion
                    rate, 20% reduced operating costs by improving computing
                    resource efficiency.
                </li>
                <li class="text-md">
                    Developed a web application using React
                    and Bootstrap to promote InsightLegi DataStorm 2025,
                    implemented GoogleWorkspace API using Go to handle user
                    registration, reducing processing time by 39%, accommodating
                    to 40% increased registration.
                </li>
            </ul>
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
                                                    <Table.Cell class="font-medium"
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
