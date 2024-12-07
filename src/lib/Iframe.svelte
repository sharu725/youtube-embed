<script>
  import { scale } from "svelte/transition";

  let { title = "", id = "", animations } = $props();
</script>

<iframe
  src="https://www.youtube-nocookie.com/embed/{id}?autoplay=1&rel=0"
  {title}
  frameborder="0"
  allow="autoplay; picture-in-picture; clipboard-write"
  allowfullscreen
  in:scale={animations ? { delay: 500, duration: 800 } : {}}
></iframe>

<style>
  iframe {
    height: auto;
    aspect-ratio: var(--aspect-ratio);
    width: 100%;
  }
</style>
