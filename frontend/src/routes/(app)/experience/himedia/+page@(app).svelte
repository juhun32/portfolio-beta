<script lang="ts">
    import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";

    import { Button } from "$lib/components/ui/button/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
</script>

<Tabs.Root value="about" class="space-y-6 mx-4">
    <div class="space-between flex items-center">
        <Tabs.List>
            <Tabs.Trigger value="about" class="relative">About</Tabs.Trigger>
            <Tabs.Trigger value="details">Details</Tabs.Trigger>
        </Tabs.List>
    </div>
    <Tabs.Content value="about" class="border-none pr-4 outline-none">
        <div class="w-full flex items-center justify-between">
            <div class="w-full space-y-1">
                <h2 class="text-2xl font-semibold tracking-tight">Himedia</h2>
                <div class="w-full flex items-center justify-between">
                    <p class="text-sm">Software Engineer Apprentice</p>
                    <p class="text-sm">January 2023 - April 2023</p>
                </div>
            </div>
        </div>
        <Separator class="my-4" />
    </Tabs.Content>
    <Tabs.Content
        value="details"
        class="flex-col border-none p-0 data-[state=active]:flex"
    >
        <div class="flex items-center justify-between">
            <div class="space-y-1">
                <h2 class="text-2xl font-semibold tracking-tight">Details</h2>
                <p class="text-muted-foreground text-sm">
                    - Developed skills in web development techniques and REST API using Bootstrap, HTML/CSS, JavaScript, and Oracle DBMS.
                </p>
                <p class="text-muted-foreground text-sm">
                    - Focused on backend development skills; object-oriented programming, data structures and algorithms, unit testing, and debugging. 
                </p>
                <p class="text-muted-foreground text-sm">
                    - Led a team of 4 and improved workflow efficiency by reducing 30% of development time by utilizing Git, Github and Notion.
                </p>
            </div>
        </div>
        <Separator class="my-4" />
    </Tabs.Content>
</Tabs.Root>
