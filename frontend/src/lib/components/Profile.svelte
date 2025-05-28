<script lang="ts">
    import type { Component } from "svelte";

    // components
    import { Separator } from "$lib/components/ui/separator";
    import { Button } from "$lib/components/ui/button/index.js";

    // images
    import Profile from "$lib/assets/profile.png";

    // icons
    import Phone from "@lucide/svelte/icons/phone";
    import Mails from "@lucide/svelte/icons/mail";
    import Download from "@lucide/svelte/icons/download";
    import Linkedin from "$lib/components/svg/Linkedin/Linkedin.svelte";
    import Github from "$lib/components/svg/Github/Github.svelte";

    // changing text
    import { onMount, onDestroy } from "svelte";
    import { fade } from "svelte/transition";

    // changing text for the main page
    let texts = ["Software Engineer", "Racing Enthusiast", "Korean BBQ Lover"];
    let index = 0;
    let currentText = $state(texts[index]);
    let interval: number;

    onMount(() => {
        interval = setInterval(() => {
            index = (index + 1) % texts.length;
            currentText = texts[index];
        }, 5000); // Change text every 5 seconds
    });

    onDestroy(() => {
        clearInterval(interval);
    });

    type Contact = {
        icon: Component;
        label: string;
        value: string;
        link: string;
    };

    const contacts: Contact[] = [
        {
            icon: Phone,
            label: "Phone",
            value: "(202) 924 - 4546",
            link: "tel:+12029244546",
        },
        {
            icon: Mails,
            label: "Email",
            value: "juhunpark32@gmail.com",
            link: "mailto:juhunpark32@gmail.com",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "juhun-park",
            link: "https://www.linkedin.com/in/juhun-park/",
        },
        {
            icon: Github,
            label: "GitHub",
            value: "juhun32",
            link: "https://www.github.com/juhun32",
        },
    ];
</script>

<div
    class="w-full h-full flex flex-col items-center justify-center lg:items-start lg:justify-start py-4 md:py-8 lg:pl-8 xl:pl-16"
>
    <div class="p-8">
        <!-- <div class="flex flex-col items-baseline">
            <CornerUpRight class="w-3 text-stone-400" />
            <p
                class="text-xs text-stone-400"
                style="writing-mode: vertical-rl;"
            >
                my beautiful girlfriend's favorite picture of me
            </p>
        </div> -->
        <img
            src={Profile}
            alt="Profile"
            class="h-[200px] sm:h-[280px] aspect-[1/1] sm:aspect-[3/4] object-cover p-1 border rounded-full sm:rounded-xl overflow-hidden"
        />
    </div>

    <div
        class="w-full flex flex-col items-center lg:items-start sm:p-4 md:px-8 gap-2 md:py-0"
    >
        <h1
            class="w-full flex items-baseline justify-center lg:justify-start gap-2 text-2xl sm:text-4xl font-bold"
        >
            Juhun Park <p class="text-sm">박주훈</p>
        </h1>
        {#key currentText}
            <span
                class="w-full flex justify-center lg:justify-start text-2xl sm:text-3xl font-bold text-yellow-900/80 dark:text-yellow-700/80"
                in:fade={{ duration: 500 }}>{currentText}</span
            >
        {/key}
        <div class="space-y-2 pt-8">
            <div
                class="grid grid-cols-[1fr_1fr_6fr] sm:grid-cols-[1fr_2fr_1fr_6fr] items-center gap-2 text-sm md:text-base"
            >
                {#each contacts as contact}
                    <contact.icon class="h-4 w-4" />
                    <a href={contact.link} class="hidden sm:flex">
                        {contact.label}
                    </a>
                    <Separator orientation="vertical" class="h-4 md:mx-2" />
                    <a href={contact.link}>
                        {contact.value}
                    </a>
                {/each}
            </div>
            <div
                class="w-full flex flex-row justify-between sm:items-center pt-8 gap-4"
            >
                <div class="flex flex-col">
                    <h2 class="font-semibold tracking-tight">Resume</h2>
                    <p class="text-xs md:text-sm text-muted-foreground">
                        Latest: May 19, 2025
                    </p>
                </div>
                <a
                    href="https://github.com/juhun32/resume"
                    class="flex items-center gap-2 text-lg font-semibold tracking-tight"
                >
                    <Button variant="outline" class="gap-2"
                        ><Download class="h-4 w-4" />Resume</Button
                    >
                </a>
            </div>
        </div>
    </div>
</div>
