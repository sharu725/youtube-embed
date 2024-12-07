<script>
  import Prism from "prismjs";
  import "prism-svelte";

  let { code = "", language = "svelte" } = $props();

  const highlighted = Prism.highlight(code, Prism.languages.svelte, language);
</script>

<pre>
{@html highlighted}
</pre>

<style>
  pre {
    padding: 0.5em 1em;
    background-color: #e9e9e9;
    border: 1px solid rgb(180, 180, 180);
    border-radius: 3px;
    white-space: pre-wrap;
  }
</style>
