<script lang="ts">
    import Projects from "../(app)/projects/+page@(app).svelte";
</script>

<div class="h-screen flex flex-col justify-center gap-4 items-center h-full">
    <div class="h-full w-3/4 sm:w-4/5 flex flex-col justify-center gap-2 items-center border-x border-dashed border-stone-300 dark:border-stone-800">
        <h1 class="text-2xl sm:text-4xl font-bold text-center ">
            Juhun Park <span class="text-violet-500">Software Engineer</span>
        </h1>
        <p class="text-base sm:text-xl text-center w-3/4 sm:w-1/2">
            Description
        </p>
    </div>
</div>

<div class="h-full">
    <Projects />
</div>
