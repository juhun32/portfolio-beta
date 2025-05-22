<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs/index.js";

    import Eduverse from "$lib/components/Eduverse.svelte";
    import Copium from "$lib/components/Copium.svelte";
    import Ftrace from "$lib/components/Ftrace.svelte";
    import Himedia from "$lib/components/Himedia.svelte";
    import Insightlegi from "$lib/components/Insightlegi.svelte";
    import Calple from "$lib/components/Calple.svelte";
</script>

<div class="h-full">
    <div
        class="flex justify-center items-center border-b border-dashed border-stone-300 dark:border-stone-800"
    >
        <div
            class="bg-background w-3/4 sm:w-4/5 border-x border-dashed border-stone-300 dark:border-stone-800"
        >
            <Tabs.Root
                value="copium"
                class="space-y-6 space-x-4 py-4 md:p-8 bg-background"
            >
                <div class="space-between flex items-center px-4">
                    <Tabs.List>
                        <Tabs.Trigger value="copium" class="relative">
                            copium.dev
                        </Tabs.Trigger>
                        <Tabs.Trigger value="calple">calple</Tabs.Trigger>
                        <Tabs.Trigger value="ftrace">ftrace</Tabs.Trigger>
                    </Tabs.List>
                </div>
                <Tabs.Content
                    value="copium"
                    class="border-none pr-4 outline-none"
                >
                    <Copium />
                </Tabs.Content>

                <Tabs.Content
                    value="calple"
                    class="flex-col border-none p-0 data-[state=active]:flex pr-4"
                >
                    <Calple />
                </Tabs.Content>

                <Tabs.Content
                    value="ftrace"
                    class="flex-col border-none p-0 data-[state=active]:flex pr-4"
                >
                    <Ftrace />
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
