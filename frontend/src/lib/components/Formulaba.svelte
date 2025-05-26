<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Drawer from "$lib/components/ui/drawer/index.js";
    import formulaba from "$lib/assets/formulaba.png";

    import { File, MoveUpRight } from "lucide-svelte";

    import { mode } from "mode-watcher";
    $: isDarkMode = $mode === "dark";

    const card = [
        {
            title: "formulaba.dev",
            link: "https://github.com/juhun32/formulaba",
            github: "https://github.com/juhun32/formulaba",
            table: [
                {
                    tech: "TBD",
                    purpose: "TBD",
                    results: "TBD",
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
<div class="flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-4 justify-between">
    <p
        class="text-xs md:text-sm border border-dashed border-stone-300 dark:border-stone-800 p-4 rounded-lg"
    >
        TBD
    </p>
    <div class="items-center justify-end">
        {#if isDarkMode}
            <img
                src={formulaba}
                alt={card[0].title}
                class="w-full border rounded-lg aspect-[16/9] object-cover"
            />
        {:else}
            <img
                src={formulaba}
                alt={card[0].title}
                class="w-full border rounded-lg aspect-[16/9] object-cover"
            />
        {/if}
    </div>
</div>
