<script lang="ts">
    import Eduverse from "$lib/components/Eduverse.svelte";
    import Copium from "$lib/components/Copium.svelte";
    import Ftrace from "$lib/components/Ftrace.svelte";
    import Himedia from "$lib/components/Himedia.svelte";
    import Insightlegi from "$lib/components/Insightlegi.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
</script>

<div class="h-full">
    <div class="hidden md:block">
        <div
            class="flex justify-center items-center border-b border-dashed border-stone-300 dark:border-stone-800"
        >
            <div
                class="bg-background w-3/4 sm:w-4/5 border-x border-dashed border-stone-300 dark:border-stone-800"
            >
                <Copium />
                <Ftrace />
            </div>
        </div>
    </div>

    <div class="hidden md:block">
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
</div>
