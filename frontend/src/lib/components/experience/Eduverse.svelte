<script lang="ts">
    const card = [
        {
            title: "Eduverse",
            position: "Software Engineer Intern",
            date: "December 2024 - February 2025",
            table: [
                {
                    tech: "React & Tailwind",
                    purpose: "Frontend Development",
                    results:
                        "Responsive and accessible design. User-friendly UI/UX.",
                },
                {
                    tech: "Django & PostgreSQL",
                    purpose: "Search Engine, REST API & Storage",
                    results:
                        "Search endpoint using Django ORM, PostgreSQL to query profiles and posts with filters.",
                },
                {
                    tech: "Postman",
                    purpose: "API Testing",
                    results:
                        "50+ API endpoint tested, achieved 98% test coverage.",
                },
            ],
        },
    ];
</script>

<div class="w-full flex items-center justify-between">
    <div class="w-full space-y-1">
        <h2 class="text-xl font-semibold tracking-tight">{card[0].title}</h2>
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

<div
    class="flex gap-8 justify-between mt-4 border border-dashed border-stone-300 dark:border-stone-800 p-4 rounded-lg"
>
    <ul
        class="space-y-3 list-disc marker:text-yellow-900/80 marker:dark:text-yellow-700/80 pl-5"
    >
        <li class="text-xs md:text-sm">
            Implemented JWT-based authentication and extended user profiles in
            Django, reducing redirect response time by 50%, to 150ms.
        </li>
        <li class="text-xs md:text-sm">
            Rebuilt frontend using React and Tailwind, resulting in 57% more
            efficient page load time, 35% reduction in API latency.
        </li>
    </ul>
</div>
