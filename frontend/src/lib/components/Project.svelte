<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Select from "$lib/components/ui/select/index.js";

    import Copium_project from "$lib/components/project/Copium.svelte";
    import Ftrace from "$lib/components/project/Ftrace.svelte";
    import Calple from "$lib/components/project/Calple.svelte";
    import Formulaba from "$lib/components/project/Formulaba.svelte";

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

<div class="bg-background w-3/4 sm:w-4/5">
    <Tabs.Root bind:value class="sm:space-y-6 px-4 py-4 md:p-8 bg-background">
        <div class="hidden sm:block space-between flex items-center sm:px-4">
            <Tabs.List>
                <Tabs.Trigger value="copium.dev" class="relative">
                    copium.dev
                </Tabs.Trigger>
                <Tabs.Trigger value="calple.date">calple.date</Tabs.Trigger>
                <Tabs.Trigger value="formulaba.dev">formulaba.dev</Tabs.Trigger>
                <Tabs.Trigger value="ftrace">ftrace</Tabs.Trigger>
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
            <Copium_project />
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
