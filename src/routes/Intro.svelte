<script>
  import Youtube from "$lib/Youtube.svelte";
  import Prism from "./Prism.svelte";
</script>

<h1>Youtube Video Embed</h1>

<p>
  The package provides faster page load while embedding youtube videos since it
  loads the youtube thumbnail istead of the entire iframe.
</p>
<p>
  The package will load the iframe and play the video only upong clicking
  the play button.
</p>

<h2>Installation</h2>
<Prism code={`npm i -D svelte-youtube-embed`} />

<h2>Usage</h2>
<Prism
  code={`<script>
  import Youtube from "svelte-youtube-embed";
</script>

<Youtube id="EBtsu6naB8g" />
`}
/>

<h2>Default</h2>
<Youtube id="EBtsu6naB8g" />

<Prism code={`<Youtube id="EBtsu6naB8g" />`} />
