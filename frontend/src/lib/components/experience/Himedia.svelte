<script lang="ts">
    import Separator from "../ui/separator/separator.svelte";

    const card = [
        {
            title: "Himedia",
            position: "Software Engineer Apprentice",
            date: "January 2023 - March 2023",
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
                Built 3 web applications adhering to SDLC as a full-time OJT,
                gained experience in Java, JS, Bootstrap, Oracle DBMS
                development.
            </li>
        </ul>
    </div>
</div>
