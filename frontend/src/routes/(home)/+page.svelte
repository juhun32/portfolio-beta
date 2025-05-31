<script lang="ts">
    import CheckIcon from "@lucide/svelte/icons/check";
    import ChevronsUpDownIcon from "@lucide/svelte/icons/chevrons-up-down";
    import { tick } from "svelte";
    import * as Command from "$lib/components/ui/command/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Switch } from "$lib/components/ui/switch/index.js";
    import { cn } from "$lib/utils.js";

    import Copium_project from "$lib/components/project/Copium.svelte";
    import Calple from "$lib/components/project/Calple.svelte";
    import Formulaba from "$lib/components/project/Formulaba.svelte";
    import Ftrace from "$lib/components/project/Ftrace.svelte";

    import Copium_experience from "$lib/components/experience/Copium.svelte";
    import Insightlegi from "$lib/components/experience/Insightlegi.svelte";
    import Eduverse from "$lib/components/experience/Eduverse.svelte";
    import Himedia from "$lib/components/experience/Himedia.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import Label from "$lib/components/ui/label/label.svelte";
    import { Download } from "lucide-svelte";

    let isProject = $state(true);

    $effect(() => {
        if (!isProject) {
            value = "copium.dev.experience";
        } else {
            value = "copium.dev.project";
        }
    });

    const projects = [
        {
            value: "copium.dev.project",
            label: "copium.dev",
        },
        {
            value: "calple.date",
            label: "calple.date",
        },
        {
            value: "formulaba.dev",
            label: "formulaba.dev",
        },
        {
            value: "ftrace",
            label: "ftrace",
        },
    ];

    const experiences = [
        {
            value: "copium.dev.experience",
            label: "copium.dev",
        },
        {
            value: "InsightLegi",
            label: "InsightLegi",
        },
        {
            value: "Eduverse",
            label: "Eduverse",
        },
        {
            value: "Himedia",
            label: "Himedia",
        },
    ];

    let open = $state(false);
    let value = $state("copium.dev.project");
    let triggerRef = $state<HTMLButtonElement>(null!);

    const selectedValue = $derived(
        projects.find((f) => f.value === value)?.label ||
            experiences.find((f) => f.value === value)?.label
    );

    // We want to refocus the trigger button when the user selects
    // an item from the list so users can continue navigating the
    // rest of the form with the keyboard.
    function closeAndFocusTrigger() {
        open = false;
        tick().then(() => {
            triggerRef.focus();
        });
    }
</script>

<div class="w-full bg-background flex flex-col items-center justify-center">
    <div class="px-4 h-full">
        <div
            class="w-full flex flex-row justify-between sm:items-center p-4 rounded-lg border border-dashed border-stone-300 dark:border-stone-800"
        >
            <div class="flex flex-col">
                <h2 class="font-semibold tracking-tight">Resume</h2>
                <p class="text-xs md:text-sm text-muted-foreground">
                    Latest: May 19, 2025
                </p>
            </div>
            <a
                href="https://github.com/juhun32/resume"
                class="flex items-center gap-2 text-lg font-semibold tracking-tight"
            >
                <Button variant="outline" class="gap-2">
                    <Download class="h-4 w-4" />Resume</Button
                >
            </a>
        </div>

        <div class="w-full flex items-center justify-center gap-4 py-4 sm:py-8">
            <Switch id="isProject" bind:checked={isProject} />
            <Label for="isProject" class="text-sm">
                {isProject ? "Projects" : "Experiences"}
            </Label>

            <!-- <Separator orientation="vertical" class="h-6" /> -->

            {#if isProject}
                <Popover.Root bind:open>
                    <Popover.Trigger bind:ref={triggerRef}>
                        {#snippet child({ props })}
                            <Button
                                variant="outline"
                                class="w-full justify-between"
                                {...props}
                                role="combobox"
                                aria-expanded={open}
                            >
                                {selectedValue || "Select..."}
                                <ChevronsUpDownIcon class="opacity-50" />
                            </Button>
                        {/snippet}
                    </Popover.Trigger>

                    <Popover.Content class="p-0">
                        <Command.Root>
                            <Command.List>
                                <Command.Empty>Interesting.</Command.Empty>
                                <Command.Group value="resume">
                                    {#each projects as project (project.value)}
                                        <Command.Item
                                            value={project.value}
                                            onSelect={() => {
                                                value = project.value;
                                                closeAndFocusTrigger();
                                            }}
                                        >
                                            <CheckIcon
                                                class={cn(
                                                    value !== project.value &&
                                                        "text-transparent"
                                                )}
                                            />
                                            {project.label}
                                        </Command.Item>
                                    {/each}
                                </Command.Group>
                            </Command.List>
                        </Command.Root>
                    </Popover.Content>
                </Popover.Root>
            {:else}
                <Popover.Root bind:open>
                    <Popover.Trigger bind:ref={triggerRef}>
                        {#snippet child({ props })}
                            <Button
                                variant="outline"
                                class="w-full justify-between"
                                {...props}
                                role="combobox"
                                aria-expanded={open}
                            >
                                {selectedValue || "Select..."}
                                <ChevronsUpDownIcon class="opacity-50" />
                            </Button>
                        {/snippet}
                    </Popover.Trigger>

                    <Popover.Content class="p-0">
                        <Command.Root>
                            <Command.List>
                                <Command.Empty>Interesting.</Command.Empty>
                                <Command.Group value="resume">
                                    {#each experiences as experience (experience.value)}
                                        <Command.Item
                                            value={experience.value}
                                            onSelect={() => {
                                                value = experience.value;
                                                closeAndFocusTrigger();
                                            }}
                                        >
                                            <CheckIcon
                                                class={cn(
                                                    value !==
                                                        experience.value &&
                                                        "text-transparent"
                                                )}
                                            />
                                            {experience.label}
                                        </Command.Item>
                                    {/each}
                                </Command.Group>
                            </Command.List>
                        </Command.Root>
                    </Popover.Content>
                </Popover.Root>
            {/if}
        </div>
        <div class="w-full flex flex-col items-center justify-center">
            {#if value === "copium.dev.project"}
                <Copium_project />
            {:else if value === "calple.date"}
                <Calple />
            {:else if value === "formulaba.dev"}
                <Formulaba />
            {:else if value === "ftrace"}
                <Ftrace />
            {:else if value === "copium.dev.experience"}
                <Copium_experience />
            {:else if value === "InsightLegi"}
                <Insightlegi />
            {:else if value === "Eduverse"}
                <Eduverse />
            {:else if value === "Himedia"}
                <Himedia />
            {/if}
        </div>
    </div>
</div>
