<script>
  import Youtube from "$lib/Youtube.svelte";
  import Prism from "./Prism.svelte";

  let altThumb = false;
</script>

<h2>Alternative thumbnail</h2>
<p>
  Some videos don't have custom thumbnail, so you can use this option to set the
  thumbnail to the default one.
</p>
<div class="controls">
  <label for="alt-thumbnail-checkbox">Toggle</label>
  <input id="alt-thumbnail-checkbox" type="checkbox" bind:checked={altThumb} />
</div>

<Youtube id="EBtsu6naB8g" {altThumb} />

<Prism code={`<Youtube id="EBtsu6naB8g" altThumb={true} />`} />
