<script lang="ts">
    import Badge from "$lib/components/ui/badge/badge.svelte";

    // project
    import Copium_project from "$lib/components/project/Copium.svelte";
    import Calple from "$lib/components/project/Calple.svelte";
    import Formulaba from "$lib/components/project/Formulaba.svelte";
    import Ftrace from "$lib/components/project/Ftrace.svelte";

    // experience
    import Copium_experience from "$lib/components/experience/Copium.svelte";
    import Insightlegi from "$lib/components/experience/Insightlegi.svelte";
    import Eduverse from "$lib/components/experience/Eduverse.svelte";
    import Himedia from "$lib/components/experience/Himedia.svelte";

    // icon
    import { ArrowUpRight, DotIcon } from "lucide-svelte";
    import Github from "$lib/components/svg/Github/Github.svelte";

    // images
    import copium_light1 from "$lib/assets/copium_light1.png";
    import copium_light2 from "$lib/assets/copium_light2.png";
    import copium_light3 from "$lib/assets/copium_light3.png";

    import copium_dark1 from "$lib/assets/copium_dark1.png";
    import copium_dark2 from "$lib/assets/copium_dark2.png";
    import copium_dark3 from "$lib/assets/copium_dark3.png";

    import calple_light1 from "$lib/assets/calple_light1.png";
    import calple_light2 from "$lib/assets/calple_light2.png";
    import calple_light3 from "$lib/assets/calple_light3.png";

    import calple_dark1 from "$lib/assets/calple_dark1.png";
    import calple_dark2 from "$lib/assets/calple_dark2.png";
    import calple_dark3 from "$lib/assets/calple_dark3.png";

    import { mode } from "mode-watcher";
    let isDarkMode = $state(false);

    $effect(() => {
        isDarkMode = $mode === "dark";
    });

    const projects = [
        {
            id: "copium_project",
            title: "copium.dev",
            github: "https://github.com/copium-dev/copium",
            link: "https://copium.dev",
            description: "Tech internship management platform",
            date: "Now",
        },
        {
            id: "calple",
            title: "calple.date",
            github: "https://github.com/juhun32/calple",
            link: "https://calple.date",
            description: "Couple schedule management platform",
            date: "Now",
            light_pictures: [calple_light1, calple_light2, calple_light3],
            dark_pictures: [calple_dark1, calple_dark2, calple_dark3],
        },
        {
            id: "formulaba",
            title: "formulaba.dev",
            github: "",
            link: "",
            description: "TBD",
            date: "Now",
        },
        {
            id: "ftrace",
            title: "ftrace",
            github: "https://github.com/juhun32/ftrace",
            // link: "https://ftrace.dev",
            description: "Racing simulator telemetry analysis tool",
            date: "2025",
        },
    ];

    const experiences = [
        {
            id: "kellogg_collective",
            title: "Northwestern Kellogg - Alumni Association",
            logo: "",
            date: "Jul '25 - Aug '25",
            description:
                "Northwestern Kellogg Alumni Connection Platform, KCMS",
        },
        {
            id: "copium_experience",
            title: "Copium",
            github: "https://github.com/copium-dev",
            link: "https://copium.dev",
            date: "Jan '25 - Now",
            description: "Tech internship management platform",
            light_pictures: [copium_light2, copium_light3],
            dark_pictures: [copium_dark2, copium_dark3],
        },
        {
            id: "insightlegi",
            title: "George Mason University - Insightlegi",
            date: "Jan '25 - Mar '25",
            description:
                "Data driven legal insights platform, product and hackathon",
        },
        {
            id: "eduverse",
            title: "George Mason University - Eduverse",
            date: "Dec '24 - Jan '25",
            description: "Personalized learning platform, computer science",
        },
        {
            id: "himedia",
            title: "Himedia",
            date: "Jan '23 - Apr '23",
            description: "Coding bootcamp, backend development",
        },
    ];

    let currentView = $state("list");

    function showProjectDetails(projectId: string) {
        currentView = projectId;
    }

    function backToList() {
        currentView = "list";
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

    import * as Dialog from "$lib/components/ui/dialog";
    import Button from "$lib/components/ui/button/button.svelte";

    let popupImage = $state<string | null>(null);
    function openImage(src: string) {
        popupImage = src;
    }
    function closeImage() {
        popupImage = null;
    }
</script>

<div
    class="w-full h-full bg-background dark:bg-secondary flex flex-col items-center justify-center gap-16 my-8"
>
    <div class="w-full">
        <Badge
            class="h-5 font-normal tracking-tight text-sm mb-2 dark:border-muted-foreground"
            variant="secondary"
        >
            Projects
        </Badge>
        <div class="w-full grid grid-cols-[1fr_3fr] items-start text-sm px-3">
            {#each projects as project}
                <div
                    class="flex items-start gap-2 text-muted-foreground text-sm py-4"
                >
                    {project.date}
                </div>
                <div class="flex flex-col items-start px-3 py-4">
                    <div class="flex items-center gap-1">
                        {#if project.link}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="hover:text-primary flex items-start gap-1 hover:underline"
                            >
                                <span class="font-normal text-sm">
                                    {project.title}
                                </span>
                                <ArrowUpRight class="h-3 w-3" />
                            </a>
                        {:else}
                            <span class="font-normal text-sm">
                                {project.title}
                            </span>
                        {/if}
                        {#if project.github}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="hover:text-primary text-muted-foreground flex items-center justify-end gap-1 border dark:border-muted-foreground rounded-full px-1 h-5"
                            >
                                <Github /> Github
                            </a>
                        {/if}
                    </div>
                    <div class="text-muted-foreground text-sm">
                        {project.description}
                    </div>
                    {#if project.light_pictures}
                        <div
                            class="flex flex-col sm:flex-row items-center gap-2 mt-1"
                        >
                            {#if !isDarkMode}
                                {#each project.light_pictures as picture}
                                    <Button
                                        variant="ghost"
                                        onclick={() => openImage(picture)}
                                        class="h-fit w-fit rounded cursor-pointer px-0 py-0"
                                    >
                                        <img
                                            src={picture}
                                            alt={project.title}
                                            class="sm:h-20 rounded cursor-pointer border"
                                        /></Button
                                    >
                                {/each}
                            {:else}
                                {#each project.dark_pictures as picture}
                                    <Button
                                        variant="ghost"
                                        onclick={() => openImage(picture)}
                                        class="h-fit w-fit rounded cursor-pointer px-0 py-0"
                                    >
                                        <img
                                            src={picture}
                                            alt={project.title}
                                            class="sm:h-20 rounded cursor-pointer border"
                                        /></Button
                                    >
                                {/each}
                            {/if}
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
    <!-- {#if currentView !== "list"}
        {@const ProjectComponent = getProjectComponent(currentView)}
        {#if ProjectComponent}
            <ProjectComponent />
        {/if}
    {/if} -->

    <div class="w-full">
        <Badge
            class="h-5 font-normal tracking-tight text-sm mb-2 dark:border-muted-foreground"
            variant="secondary"
        >
            Experiences
        </Badge>
        <div class="w-full grid grid-cols-[1fr_3fr] items-start text-sm px-3">
            {#each experiences as experience}
                <div
                    class="flex items-start gap-2 text-muted-foreground text-sm py-4"
                >
                    {experience.date}
                </div>
                <div class="flex items-center gap-2 py-4">
                    <!-- {#if experience.logo}
                            <img
                                src={experience.logo}
                                alt={experience.title}
                                class="h-5 w-5 rounded-full"
                            />
                        {/if} -->
                    <div class="flex flex-col items-start px-3">
                        <div class="flex items-center gap-1">
                            {#if experience.link}
                                <a
                                    href={experience.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="hover:text-primary flex items-start gap-1 hover:underline"
                                >
                                    <span class="font-normal text-sm">
                                        {experience.title}
                                    </span>
                                    <ArrowUpRight class="h-3 w-3" />
                                </a>
                            {:else}
                                <span class="font-normal text-sm">
                                    {experience.title}
                                </span>
                            {/if}
                            {#if experience.github}
                                <a
                                    href={experience.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="hover:text-primary text-muted-foreground flex items-center justify-end gap-1 border dark:border-muted-foreground rounded-full px-1 h-5"
                                >
                                    <Github /> Github
                                </a>
                            {/if}
                        </div>
                        <div class="text-muted-foreground text-sm">
                            {experience.description}
                        </div>
                        {#if experience.light_pictures}
                            <div
                                class="flex flex-col sm:flex-row items-center gap-2 mt-1"
                            >
                                {#if !isDarkMode}
                                    {#each experience.light_pictures as picture}
                                        <Button
                                            variant="ghost"
                                            onclick={() => openImage(picture)}
                                            class="h-fit w-fit rounded cursor-pointer px-0 py-0 border"
                                        >
                                            <img
                                                src={picture}
                                                alt={experience.title}
                                                class="sm:h-20 rounded cursor-pointer"
                                            />
                                        </Button>
                                    {/each}
                                {:else}
                                    {#each experience.dark_pictures as picture}
                                        <Button
                                            variant="ghost"
                                            onclick={() => openImage(picture)}
                                            class="h-fit w-fit rounded cursor-pointer px-0 py-0"
                                        >
                                            <img
                                                src={picture}
                                                alt={experience.title}
                                                class="sm:h-20 rounded cursor-pointer"
                                            />
                                        </Button>
                                    {/each}
                                {/if}
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- {#if currentView !== "list"}
        <div class="flex items-center mt-4">
            <Button
                variant="ghost"
                size="sm"
                onclick={backToList}
                class="flex items-center gap-2"
            >
                <ArrowLeft class="h-4 w-4" />
                Back
            </Button>
        </div>
        {@const ExperienceComponent = getExperienceComponent(currentView)}
        {#if ExperienceComponent}
            <ExperienceComponent />
        {/if}
    {/if} -->

    {#if popupImage}
        <Dialog.Root open={true} onOpenChange={closeImage}>
            <Dialog.Content
                class="w-[90vw] sm:w-[70vw] z-50 p-2 bg-background rounded shadow-lg flex flex-col items-center"
            >
                <img
                    src={popupImage}
                    alt="Full preview"
                    class="rounded aspect-[16/9]"
                />
            </Dialog.Content>
        </Dialog.Root>
    {/if}
</div>
