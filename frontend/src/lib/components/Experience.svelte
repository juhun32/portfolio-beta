<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Select from "$lib/components/ui/select/index.js";

    import Copium_experience from "$lib/components/experience/Copium.svelte";
    import Eduverse from "$lib/components/experience/Eduverse.svelte";
    import Himedia from "$lib/components/experience/Himedia.svelte";
    import Insightlegi from "$lib/components/experience/Insightlegi.svelte";

    const experiences = [
        { value: "copium.dev" },
        { value: "insightlegi" },
        { value: "eduverse" },
        { value: "himedia" },
    ];

    let value = $state("copium.dev");

    const triggerContent = $derived(
        experiences.find((f) => f.value === value)?.value
    );

    function handleSelectChange(selectedValue: string) {
        const project = experiences.find((p) => p.value === selectedValue);
        if (project) {
            value = project.value;
        }
    }
</script>

<div class="bg-background w-3/4 sm:w-4/5">
    <Tabs.Root bind:value class="sm:space-y-6 px-4 py-4 md:p-8 bg-background">
        <div class="hidden sm:block space-between flex items-center sm:px-4">
            <Tabs.List>
                <Tabs.Trigger value="copium.dev">copium.dev</Tabs.Trigger>
                <Tabs.Trigger value="insightlegi">InsightLegi</Tabs.Trigger>
                <Tabs.Trigger value="eduverse">Eduverse</Tabs.Trigger>
                <Tabs.Trigger value="himedia">Himedia</Tabs.Trigger>
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
                        {#each experiences as project (project.value)}
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
            <Copium_experience />
        </Tabs.Content>

        <Tabs.Content
            value="insightlegi"
            class="flex-col border-none p-0 data-[state=active]:flex sm:px-4"
        >
            <Insightlegi />
        </Tabs.Content>

        <Tabs.Content
            value="eduverse"
            class="flex-col border-none p-0 data-[state=active]:flex sm:px-4"
        >
            <Eduverse />
        </Tabs.Content>
        <Tabs.Content
            value="himedia"
            class="flex-col border-none p-0 data-[state=active]:flex sm:px-4"
        >
            <Himedia />
        </Tabs.Content>
    </Tabs.Root>
</div>
