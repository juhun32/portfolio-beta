<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { mode } from "mode-watcher";
    import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
    import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

    let { value = $bindable("") } = $props();

    let editorContainer: HTMLElement;
    let editorInstance: any;

    // parent can force update content
    export function updateContent(newCode: string) {
        if (editorInstance && newCode !== editorInstance.getValue()) {
            const pos = editorInstance.getPosition();
            editorInstance.setValue(newCode);
            if (pos) editorInstance.setPosition(pos);
        }
    }

    const typewriterTheme = {
        base: "vs",
        inherit: true,
        rules: [
            { token: "comment", foreground: "6a9955", fontStyle: "italic" },
            { token: "string", foreground: "5c4033" },
            { token: "keyword", foreground: "cd3232", fontStyle: "bold" },
            { token: "number", foreground: "000000" },
        ],
        colors: {
            "editor.background": "#f5f1e6",
            "editor.foreground": "#2b2623",
            "editorLineNumber.foreground": "#d4d4d4",
            "editor.lineHighlightBackground": "#ece8de",
        },
    };

    onMount(async () => {
        if (!self.MonacoEnvironment) {
            self.MonacoEnvironment = {
                getWorker: function (_: any, label: string) {
                    if (
                        label === "json" ||
                        label === "typescript" ||
                        label === "javascript"
                    ) {
                        return new tsWorker();
                    }
                    return new editorWorker();
                },
            };
        }

        const monaco = await import("monaco-editor");
        monaco.editor.defineTheme("typewriter", typewriterTheme as any);

        editorInstance = monaco.editor.create(editorContainer, {
            value: value,
            language: "javascript",
            theme: $mode === "dark" ? "vs-dark" : "typewriter",
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: '"Courier New", Courier, monospace',
            readOnly: false,
            scrollBeyondLastLine: false,
            padding: { top: 20, bottom: 20 },
        });

        // sync changes back to the prop variable
        editorInstance.onDidChangeModelContent(() => {
            value = editorInstance.getValue();
        });

        mode.subscribe((val) => {
            if (editorInstance) {
                monaco.editor.setTheme(
                    val === "dark" ? "vs-dark" : "typewriter"
                );
            }
        });
    });

    onDestroy(() => {
        if (editorInstance) editorInstance.dispose();
    });
</script>

<div class="w-full h-full" bind:this={editorContainer}></div>
