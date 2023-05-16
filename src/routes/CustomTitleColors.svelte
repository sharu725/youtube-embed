<script>
  import Youtube from "$lib/Youtube.svelte";
  import Prism from "./Prism.svelte";

  let titleColor = "#000000";
  let titleShadowColor = "#ffffff";
  let titleFontFamily = "'Segoe UI', Geneva, Verdana, sans-serif";
</script>

<h2>Using custom title colors</h2>
<div class="controls">
  <label for="title-color-select">Title color</label>
  <input id="title-color-select" type="color" bind:value={titleColor} />
  <label for="title-shadow-color">Title shadow color</label>
  <input id="title-shadow-color" type="color" bind:value={titleShadowColor} />
  <label for="title-font-family">Font family</label>
  <select
    name="title-font-family"
    id="title-font-family"
    bind:value={titleFontFamily}
  >
    <option value="'Roboto', sans-serif">Roboto</option>
    <option value="'Segoe UI', Geneva, Verdana, sans-serif">Segoe UI</option>
    <option value="'Helvetica Neue', Helvetica, Arial, sans-serif"
      >Helvetica Neue</option
    >
    <option value="'Times New Roman', Times, serif">Times New Roman</option>
    <option value="'Courier New', Courier, monospace">Courier New</option>
  </select>
</div>

<Youtube
  id="KrSH82gg7BQ"
  --title-color={titleColor}
  --title-shadow-color="{titleShadowColor}30"
  --title-font-family={titleFontFamily}
/>

<Prism
  code={`<Youtube
  id="KrSH82gg7BQ"
  --title-color={titleColor}
  --title-shadow-color="{titleShadowColor}30"
  --title-font-family={titleFontFamily}
/>`}
/>
