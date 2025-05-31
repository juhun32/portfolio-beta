<script lang="ts">
    import Separator from "../ui/separator/separator.svelte";

    const card = [
        {
            title: "InsightLegi",
            position: "Software Engineer Intern",
            date: "January 2024 - March 2025",
            table: [
                {
                    tech: "React & Tailwind",
                    purpose: "Frontend Development",
                    results:
                        "Data visualization dashboards, responsive design web application.",
                },
                {
                    tech: "Go",
                    purpose: "REST API",
                    results: "Front-facing REST API for authentication",
                },
            ],
        },
    ];
</script>

<div class="p-4 rounded-lg w-full">
    <div class="w-full flex items-center justify-between">
        <div class="w-full space-y-1">
            <h2 class="text-lg font-semibold tracking-tight">
                {card[0].title}
            </h2>
            <div
                class="w-full flex flex-col md:flex-row md:items-center justify-between"
            >
                <p class="text-xs md:text-base">
                    {card[0].position}
                </p>
                <p class="text-xs md:text-base">
                    {card[0].date}
                </p>
            </div>
        </div>
    </div>

    <Separator class="my-4" />

    <div
        class="flex gap-8 justify-between sm:mt-4 border border-dashed border-stone-300 dark:border-stone-800 p-4 rounded-lg"
    >
        <ul
            class="space-y-3 list-disc marker:text-yellow-900/80 marker:dark:text-yellow-700/80 pl-5"
        >
            <li class="text-xs md:text-sm">
                Created data visualization dashboard for 15 states, 30+ charts
                using Chart.js and React-Query while maintaining sub-150ms data
                fetch time, resulting in 20% reduced operating costs by
                improving computing resource efficiency.
            </li>
            <li class="text-xs md:text-sm">
                Developed a web application using React and Tailwind to promote
                the hackathon, led to 100 (+42%) registrations.
            </li>
            <li class="text-xs md:text-sm">
                Implemented a new registration-processing pipeline in Go,
                integrating the Google Workspace API, reducing registration
                processing time by 70% compared to the previous flow.
            </li>
        </ul>
    </div>
</div>
