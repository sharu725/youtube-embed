<script>
  import Youtube from "$lib/Youtube.svelte";
  import Prism from "./Prism.svelte";
</script>

<h2>With custom play button</h2>

<Youtube id="EBtsu6naB8g" animations={false}>
  <button>play</button>
</Youtube>

<Prism
  code={`<Youtube id="EBtsu6naB8g">
  <button>play</button>
</Youtube>`}
/>
