import type { Component } from "svelte";

export interface Contact {
    icon: Component;
    label: string;
    value: string;
    link: string;
}
