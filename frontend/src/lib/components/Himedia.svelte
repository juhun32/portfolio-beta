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
                    tech: "React & Bootstrap",
                    purpose: "Frontend Development",
                    results: "Responsive web applications.",
                },
                {
                    tech: "Java, Oracle DBMS",
                    purpose: "Backend Development",
                    results:
                        "Improved scalability, 25% faster backend response times.",
                },
            ],
        },
    ];
</script>

<Tabs.Root value="about" class="space-y-6 space-x-4 py-4 md:p-8">
    <Tabs.Content value="about" class="border-none pr-4 outline-none px-4">
        <div class="w-full flex items-center justify-between">
            <div class="w-full space-y-1">
                <h2 class="text-xl font-semibold tracking-tight">
                    Himedia Academy
                </h2>
                <div class="w-full flex items-center justify-between">
                    <p class="text-xs md:text-base">Software Engineer Intern</p>
                    <p class="text-xs md:text-base">
                        December 2024 - Feburary 2025
                    </p>
                </div>
            </div>
        </div>
        <!-- <Separator class="my-4" /> -->
        <div
            class="flex gap-8 justify-between mt-4 border border-dashed border-stone-300 dark:border-stone-800 p-4 rounded-lg"
        >
            <ul
                class="space-y-3 list-disc marker:text-yellow-900/80 marker:dark:text-yellow-700/80 pl-5"
            >
                <li class="text-xs md:text-sm">
                    Built 3 web applications adhering to SDLC as a full-time
                    OJT, gained experience in Java, JS, Bootstrap, Oracle DBMS
                    development.
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
