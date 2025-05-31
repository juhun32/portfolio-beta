<script lang="ts">
    import Separator from "../ui/separator/separator.svelte";

    const card = [
        {
            title: "copium.dev",
            position: "Founder",
            date: "December 2024 - Present",
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
                Built an internship application management platform with
                SvelteKit, Go and Firestore, achieving 99.9% uptime and
                sub-100ms search latency for 100+ concurrent users, with 3,000+
                applications.
            </li>
            <li class="text-xs md:text-sm">
                Scaled search engine indexes to 10k concurrent operations with
                Cloud Pub/Sub and Go consumer, reducing search latency by 30%.
            </li>
            <li class="text-xs md:text-sm">
                Delivered an 80% reduction in query latency for BigQuery data
                analytics by leveraging CQRS pattern architecture, 50% reduction
                in data transfer costs by implementing server-side paginated
                Algolia searches.
            </li>
            <li class="text-xs md:text-sm">
                Implemented compensating transactions for consistency across
                data stores with a 99.9% success rate.
            </li>
        </ul>
    </div>
</div>
