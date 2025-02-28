<script lang="ts">
    import Projects from "../(app)/projects/+page@(app).svelte";
    import Profile from "./images/profile.png";

    // changing text
    import { onMount, onDestroy } from "svelte";
    import { fade } from "svelte/transition";

    let texts = ["Software Engineer", "Racing Enthusiast", "College Student"];
    let index = 0;
    let currentText = texts[index];

    let interval: number;

    onMount(() => {
        interval = setInterval(() => {
            index = (index + 1) % texts.length;
            currentText = texts[index];
        }, 5000); // Change text every 2 seconds
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class="flex flex-col justify-center gap-4 items-center">
    <div
        class="w-3/4 sm:w-4/5 p-8 grid grid-cols-[1fr_2fr] items-center py-8 md:py-10 lg:py-12 border-x border-dashed border-stone-300 dark:border-stone-800"
    >
        <div class="flex justify-center items-center gap-1">
            <p class="text-xs text-stone-400" style="writing-mode: vertical-rl;">
                my beautiful girlfriend's favorite picture of me :)
            </p>
            <img
                src={Profile}
                alt="Profile"
                class="h-[280px] w-[210px] aspect-[3/4] object-cover p-1 border rounded-xl overflow-hidden dark:bg-white"
            />
        </div>
        <div class="flex flex-col items-start pr-8 gap-3">
            <h1
                class="flex items-baseline gap-2 text-2xl sm:text-4xl font-bold"
            >
                Juhun Park <p class="text-sm">박주훈</p>
            </h1>
            {#key currentText}
                <span
                    class="text-2xl sm:text-4xl font-bold text-yellow-900/80 dark:text-yellow-700/80"
                    in:fade={{ duration: 500 }}>{currentText}</span
                >{/key}
            <p class="text-base sm:text-xl">
                Hello! I am currently a student of George Mason University,
                studying computer science and artificial intelligence. I am
                interested in machine learning application in healthcare
                industry.
            </p>
        </div>
    </div>
</div>

<div class="h-full">
    <Projects />
</div>
