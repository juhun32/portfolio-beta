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
                        <Tabs.Root value="about" class="space-y-6">
                            <div class="space-between flex items-center">
                                <Tabs.List>
                                    <Tabs.Trigger
                                        value="about"
                                        class="relative"
                                    >
                                        About
                                    </Tabs.Trigger>
                                    <Tabs.Trigger value="details"
                                        >Details</Tabs.Trigger
                                    >
                                    <Tabs.Trigger value="live" disabled
                                        >Live</Tabs.Trigger
                                    >
                                </Tabs.List>
                                <div class="ml-auto mr-4">
                                    <Button>Add about</Button>
                                </div>
                            </div>
                            <Tabs.Content
                                value="about"
                                class="border-none pr-4 outline-none"
                            >
                                <div class="flex items-center justify-between">
                                    <div class="space-y-1">
                                        <h2
                                            class="text-2xl font-semibold tracking-tight"
                                        >
                                            Eduverse
                                        </h2>
                                        <p
                                            class="text-muted-foreground text-sm"
                                        >
                                            Top picks for you. Updated daily.
                                        </p>
                                    </div>
                                </div>
                                <Separator class="my-4" />
                                <div class="relative">
                                    <!-- <ScrollArea orientation="both"> -->
                                    <div class="flex space-x-4 pb-4">
                                        <!-- {#each listenNowAlbums as album}
												<AlbumArtwork
													{album}
													class="w-[250px]"
													aspectRatio="portrait"
													width={250}
													height={330}
												/>
											{/each} -->
                                    </div>
                                    <!-- </ScrollArea> -->
                                </div>
                                <div class="mt-6 space-y-1">
                                    <h2
                                        class="text-2xl font-semibold tracking-tight"
                                    >
                                        Made for You
                                    </h2>
                                    <p class="text-muted-foreground text-sm">
                                        Your personal playlists. Updated daily.
                                    </p>
                                </div>
                                <Separator class="my-4" />
                                <div class="relative">
                                    <!-- <ScrollArea orientation="both"> -->
                                    <div class="flex space-x-4 pb-4">
                                        <!-- {#each madeForYouAlbums as album}
												<AlbumArtwork
													{album}
													class="w-[150px]"
													aspectRatio="square"
													width={150}
													height={150}
												/>
											{/each} -->
                                    </div>
                                    <!-- </ScrollArea> -->
                                </div>
                            </Tabs.Content>
                            <Tabs.Content
                                value="details"
                                class="flex-col border-none p-0 data-[state=active]:flex"
                            >
                                <div class="flex items-center justify-between">
                                    <div class="space-y-1">
                                        <h2
                                            class="text-2xl font-semibold tracking-tight"
                                        >
                                            New Episodes
                                        </h2>
                                        <p
                                            class="text-muted-foreground text-sm"
                                        >
                                            Your favorite podcasts. Updated
                                            daily.
                                        </p>
                                    </div>
                                </div>
                                <Separator class="my-4" />
                                <!-- <PodcastEmptyPlaceholder /> -->
                            </Tabs.Content>
                        </Tabs.Root>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
