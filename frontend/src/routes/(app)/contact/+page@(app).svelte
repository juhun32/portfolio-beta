<script lang="ts">
    import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";

    import { Button } from "$lib/components/ui/button/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
</script>

<div class="md:hidden">
    <!-- <enhanced:img src={aboutLight} alt="about" class="block dark:hidden" /> -->
    <!-- <enhanced:img src={aboutDark} alt="about" class="hidden dark:block" /> -->
</div>
<div class="hidden md:block">
    <!-- <Menu /> -->
    <div class="flex justify-center items-center border-y border-dashed border-stone-300 dark:border-stone-800">
        <div class="bg-background w-3/4 sm:w-4/5 border-x border-dashed border-stone-300 dark:border-stone-800">
            <div class="flex justify-center">
                <Sidebar class="hidden lg:block" />
                <div class="w-full col-span-3 lg:col-span-4">
                    <div class="px-4 p-8">
                        Email
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
