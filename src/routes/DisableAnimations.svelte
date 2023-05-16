<script>
  import Youtube from "$lib/Youtube.svelte";
  import Prism from "./Prism.svelte";
</script>

<h2>Disable animations</h2>
<p>
  You can disable animation that is displayed when the play button is clicked by
  passing `animations` attribute.
</p>

<Youtube id="EBtsu6naB8g" animations={false} />

<Prism code={`<Youtube id="EBtsu6naB8g" animations={false} />`} />
