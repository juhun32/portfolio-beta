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
            title: "calple",
            description: "",
            link: "https://calple.dev",
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

<div class="w-full flex items-center justify-between">
    <div
        class="w-full flex flex-col md:flex-row md:items-center justify-between gap-4"
    >
        <h2 class="text-xl font-semibold tracking-tight">calple</h2>
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
                                                            <Table.Body
                                                                class="items-center"
                                                            >
                                                                {#each card.table as feature, j (j)}
                                                                    <Table.Row>
                                                                        <Table.Cell
                                                                            class="font-medium align-top"
                                                                            >{feature.tech}</Table.Cell
                                                                        >
                                                                        <Table.Cell
                                                                            class="hidden sm:flex"
                                                                        >
                                                                            {feature.purpose}</Table.Cell
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
                href="https://calple.dev"
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
        Platform for every couples to make their relationship more beautiful.
        Customizable shared calendar, to-do list for couples, and relationship
        analytics. Still in development, anticipated to be released in upcoming
        months.
    </p>
    <div class="hidden md:flex gap-4">
        <div class="flex items-center justify-end">
            <img src={copium1} alt="copium.dev" class="border rounded-lg" />
        </div>
    </div>
</div>
