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
            <!-- <Tabs.Trigger value="live" disabled>Live</Tabs.Trigger> -->
        </Tabs.List>
        <!-- <div class="ml-auto mr-4"> -->
            <!-- <Button>Add about</Button> -->
        <!-- </div> -->
    </div>
    <Tabs.Content value="about" class="border-none pr-4 outline-none">
        <div class="flex items-center justify-between">
            <div class="space-y-1">
                <h2 class="text-2xl font-semibold tracking-tight">Eduverse</h2>
                <p class="text-muted-foreground text-sm">
                    Software Engineer Intern
                </p>
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
                <h2 class="text-2xl font-semibold tracking-tight">
                    Details
                </h2>
                <p class="text-muted-foreground text-sm">
                    - Implemented an ML-based recommendation algorithm using
                    Python and Django suggesting user connections, personalized
                    posts.
                </p>
                <p class="text-muted-foreground text-sm">
                    - Developed search endpoint using Django ORM, PostgreSQL to
                    query profiles and posts with filters for names, skills,
                    post types.
                </p>
                <p class="text-muted-foreground text-sm">
                    - Collaborated on API testing, debugging using Postman and
                    Git, ensuring profile post-related functionality achieved
                    98% accuracy.
                </p>
                <p class="text-muted-foreground text-sm">
                    - Implemented backend features, search features with
                    seamless React integration for frontend functionality,
                    deployed using Firebase.
                </p>
                <p class="text-muted-foreground text-sm">
                    - Worked as a team of 6 to develop and deploy scalable
                    backend services, ensuring high availability and
                    performance.
                </p>
            </div>
        </div>
        <Separator class="my-4" />
    </Tabs.Content>
</Tabs.Root>
