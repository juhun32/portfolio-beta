<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs/index.js";

    import Eduverse from "$lib/components/Eduverse.svelte";
    import Copium from "$lib/components/Copium.svelte";
    import Ftrace from "$lib/components/Ftrace.svelte";
    import Himedia from "$lib/components/Himedia.svelte";
    import Insightlegi from "$lib/components/Insightlegi.svelte";
    import Calple from "$lib/components/Calple.svelte";
    import Formulaba from "$lib/components/Formulaba.svelte";
    import * as Select from "$lib/components/ui/select/index.js";

    const projects = [
        { value: "copium.dev" },
        { value: "calple.date" },
        { value: "formulaba.dev" },
        { value: "ftrace" },
    ];

    let value = $state("copium.dev");

    const triggerContent = $derived(
        projects.find((f) => f.value === value)?.value
    );

    function handleSelectChange(selectedValue: string) {
        const project = projects.find((p) => p.value === selectedValue);
        if (project) {
            value = project.value;
        }
    }
</script>

<div class="h-full">
    <div
        class="flex justify-center items-center border-b border-dashed border-stone-300 dark:border-stone-800"
    >
        <div
            class="bg-background w-3/4 sm:w-4/5 border-x border-dashed border-stone-300 dark:border-stone-800"
        >
            <Tabs.Root
                bind:value
                class="sm:space-y-6 px-4 py-4 md:p-8 bg-background"
            >
                <div
                    class="hidden sm:block space-between flex items-center sm:px-4"
                >
                    <Tabs.List>
                        <Tabs.Trigger value="copium" class="relative">
                            copium.dev
                        </Tabs.Trigger>
                        <Tabs.Trigger value="calple">calple.date</Tabs.Trigger>
                        <Tabs.Trigger value="formulaba"
                            >formulaba.dev</Tabs.Trigger
                        >
                        <Tabs.Trigger value="ftrace">ftrace.dev</Tabs.Trigger>
                    </Tabs.List>
                </div>
                <div class="flex sm:hidden">
                    <Select.Root
                        type="single"
                        name="selectProject"
                        {value}
                        onValueChange={(value) => handleSelectChange(value)}
                    >
                        <Select.Trigger class="w-full">
                            {triggerContent}
                        </Select.Trigger>
                        <Select.Content>
                            <Select.Group>
                                {#each projects as project (project.value)}
                                    <Select.Item
                                        value={project.value}
                                        label={project.value}
                                    >
                                        {project.value}
                                    </Select.Item>
                                {/each}
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>
                </div>
                <Tabs.Content
                    value="copium.dev"
                    class="border-none outline-none sm:px-4"
                >
                    <Copium />
                </Tabs.Content>

                <Tabs.Content
                    value="calple.date"
                    class="flex-col border-none p-0 data-[state=active]:flex sm:px-4"
                >
                    <Calple />
                </Tabs.Content>

                <Tabs.Content
                    value="ftrace"
                    class="flex-col border-none p-0 data-[state=active]:flex sm:px-4"
                >
                    <Ftrace />
                </Tabs.Content>
                <Tabs.Content
                    value="formulaba.dev"
                    class="flex-col border-none p-0 data-[state=active]:flex sm:px-4"
                >
                    <Formulaba />
                </Tabs.Content>
            </Tabs.Root>
        </div>
    </div>

    <div
        class="flex justify-center items-center border-b border-dashed border-stone-300 dark:border-stone-800"
    >
        <div
            class="bg-background w-3/4 sm:w-4/5 border-x border-dashed border-stone-300 dark:border-stone-800"
        >
            <Insightlegi />
            <Eduverse />
            <Himedia />
        </div>
    </div>
</div>
