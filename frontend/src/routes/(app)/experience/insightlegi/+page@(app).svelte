<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { buttonVariants } from "$lib/components/ui/button";
    import * as Tabs from "$lib/components/ui/tabs/index.js";

    const card = [
        {
            title: "copium.dev",
            description: "Tech internship management platform with real-time search, data analytics, and live postings.\
            Backend infrastructure scalable to millions with microservices and message queues.",
            date: "Jan 2025 - Present",
            link: "https://copium.dev",
            github: "https://github.com/copium-dev/copium",
            table: [
                {
                    tech: "SvelteKit & Vercel",
                    purpose: "Frontend Development",
                    results: "Responsive, beautiful, and accessible design with SSR for performance."
                },
                {
                    tech: "Algolia",
                    purpose: "Search Engine",
                    results: "Real-time search and filtering on internship postings or user's tracked applications.",
                },
                {
                    tech: "Go & Firestore",
                    purpose: "REST API & Storage",
                    results: "Front-facing REST API for authentication, Algolia searching, and data analytics.",
                },
                {
                    tech: "Cloud Pub/Sub",
                    purpose: "Messaging Service",
                    results: "Decoupled and fault-tolerant Algolia indexing and BigQuery analytics with a strong consistency model."
                },
                {
                    tech: "BigQuery & CQRS",
                    purpose: "Real-time Analytics",
                    results: "Personalized insights by tracking monthly trends, leveraging a denormalized schema and CQRS for fast queries."
                },
                {
                    tech: "Docker & GCP & Nginx",
                    purpose: "Deployment",
                    results: "Containerized, scalable, and fault-tolerant deployment across VM instances and serverless functions.",
                },
                {
                    tech: "Python",
                    purpose: "Data Scraping",
                    results: "Scheduled tech internship posting scraping for focused and fresh data.",
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
                    <p class="text-sm">December 2024 - Feburary 2025</p>
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
                            <Card.Header>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Description>{card.description}</Card.Description>
                                <Card.Description>
                                    <!-- <Badge>{card.date}</Badge> -->
                                </Card.Description>
                            </Card.Header>
                            <Card.Content>
                                {#if card.table}
                                    <Table.Root class="text-xs sm:text-sm">
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.Head class="sm:w-[150px]"
                                                    >Tech</Table.Head
                                                >
                                                <Table.Head class="sm:w-[200px]"
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
                            <Card.Footer>
                                <div class="flex flex-row gap-4">
                                    <!-- if no link, only show GitHub with default variant. otherwise, GitHub is outline and Visit is default -->
                                    {#if card.link}
                                        <a
                                            href={card.link}
                                            target="_blank"
                                            class={buttonVariants({ variant: "default" })}
                                        >
                                            Visit
                                        </a>
                                        <a
                                            href={card.github}
                                            target="_blank"
                                            class={buttonVariants({ variant: "outline" })}
                                        >
                                            GitHub
                                        </a>
                                    {:else}
                                    <a
                                        href={card.github}
                                        target="_blank"
                                        class={buttonVariants({ variant: "default" })}
                                    >
                                        GitHub
                                    </a>
                                    {/if}
                                </div>
                            </Card.Footer>
                        </Card.Root>
                    </Tabs.Content>
                {/each}
            </Tabs.Root>
        </div>
        <Separator class="my-4" />
    </Tabs.Content>
</Tabs.Root>
