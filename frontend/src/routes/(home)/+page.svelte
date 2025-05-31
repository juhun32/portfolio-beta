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
    import {
        ArrowLeft,
        Download,
        EllipsisVertical,
        ExternalLink,
        Plus,
    } from "lucide-svelte";
    import Copium from "$lib/components/experience/Copium.svelte";
    import * as Table from "$lib/components/ui/table/index.js";
    import Github from "$lib/components/svg/Github/Github.svelte";

    const projects = [
        {
            id: "copium_project",
            title: "copium.dev",
            github: "https://github.com/copium-dev/copium",
            link: "https://copium.dev",
        },
        {
            id: "calple",
            title: "calple.date",
            github: "https://github.com/juhun32/calple",
            link: "https://calple.date",
        },
        {
            id: "formulaba",
            title: "formulaba.dev",
            github: "",
            link: "",
        },
        {
            id: "ftrace",
            title: "ftrace",
            github: "https://github.com/juhun32/ftrace",
        },
    ];

    const experiences = [
        {
            id: "copium_experience",
            title: "Copium",
            link: "https://copium.dev",
        },
        {
            id: "insightlegi",
            title: "Insightlegi",
        },
        {
            id: "eduverse",
            title: "Eduverse",
        },
        {
            id: "himedia",
            title: "Himedia",
        },
    ];

    let currentView = $state("table");

    function showProjectDetails(projectId: string) {
        currentView = projectId;
    }

    function backToTable() {
        currentView = "table";
    }

    function getProjectComponent(projectId: string) {
        switch (projectId) {
            case "copium_project":
                return Copium_project;
            case "calple":
                return Calple;
            case "formulaba":
                return Formulaba;
            case "ftrace":
                return Ftrace;
            default:
                return null;
        }
    }

    function getExperienceComponent(experienceId: string) {
        switch (experienceId) {
            case "copium_experience":
                return Copium_experience;
            case "insightlegi":
                return Insightlegi;
            case "eduverse":
                return Eduverse;
            case "himedia":
                return Himedia;
            default:
                return null;
        }
    }
</script>

<div
    class="w-4/5 h-full bg-background flex flex-col items-center justify-center gap-4 sm:gap-8"
>
    <div
        class="w-full flex flex-row justify-between sm:items-center p-4 sm:px-8 rounded-lg border border-dashed border-stone-300 dark:border-stone-800"
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

    <div
        class="w-full h-full p-4 rounded-lg border border-dashed border-stone-300 dark:border-stone-800"
    >
        {#if currentView === "table"}
            <div class="h-full flex flex-col gap-4">
                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            <Table.Head class="w-[30%]">Projects</Table.Head>
                            <Table.Head class="w-[40%]"></Table.Head>
                            <Table.Head class="w-[30%]"></Table.Head>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {#each projects as project (project.id)}
                            <Table.Row class="w-full">
                                <Table.Cell class="h-full font-medium py-2">
                                    <div class="flex gap-2 items-center">
                                        <CheckIcon class="h-4 w-4" />
                                        <a
                                            href={project.link}
                                            class="hover:underline"
                                        >
                                            {project.title}
                                        </a>
                                    </div>
                                </Table.Cell>
                                <Table.Cell class="font-medium py-2">
                                    <div class="flex items-center gap-4">
                                        {#if project.github}
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                class="items-center hover:text-primary"
                                            >
                                                <Github />
                                            </a>
                                        {/if}
                                        {#if project.link}
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                class="items-center hover:text-primary"
                                            >
                                                <ExternalLink class="h-4 w-4" />
                                            </a>
                                        {/if}
                                    </div>
                                </Table.Cell>
                                <Table.Cell class="font-medium text-right py-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onclick={() =>
                                            showProjectDetails(project.id)}
                                        class="h-6 w-6"
                                    >
                                        <Plus class="h-4 w-4" />
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        {/each}
                    </Table.Body>
                </Table.Root>

                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            <Table.Head class="w-[30%]">Experiences</Table.Head>
                            <Table.Head class="w-[40%]"></Table.Head>
                            <Table.Head class="w-[30%]"></Table.Head>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {#each experiences as project (project.id)}
                            <Table.Row class="w-full">
                                <Table.Cell class="h-full font-medium py-2">
                                    <div class="flex gap-2 items-center">
                                        <CheckIcon class="h-4 w-4" />
                                        <a
                                            href={project.link}
                                            class="hover:underline"
                                        >
                                            {project.title}
                                        </a>
                                    </div>
                                </Table.Cell>
                                <Table.Cell class="font-medium py-2">
                                    <div class="flex items-center gap-4">
                                        {#if project.link}
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                class="items-center hover:text-primary"
                                            >
                                                <ExternalLink class="h-4 w-4" />
                                            </a>
                                        {/if}
                                    </div>
                                </Table.Cell>
                                <Table.Cell class="font-medium text-right py-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onclick={() =>
                                            showProjectDetails(project.id)}
                                        class="h-6 w-6"
                                    >
                                        <Plus class="h-4 w-4" />
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        {/each}
                    </Table.Body>
                </Table.Root>
            </div>
        {:else}
            <div class="flex items-center">
                <Button
                    variant="ghost"
                    size="sm"
                    onclick={backToTable}
                    class="flex items-center gap-2"
                >
                    <ArrowLeft class="h-4 w-4" />
                    Back to Projects
                </Button>
            </div>

            {@const ProjectComponent = getProjectComponent(currentView)}
            <ProjectComponent />

            {@const ExperienceComponent = getExperienceComponent(currentView)}
            <ExperienceComponent />
        {/if}
    </div>
</div>
