<script>
  import Intro from "./Intro.svelte";
  import CustomPlayButton from "./CustomPlayButton.svelte";
  import CustomOverlays from "./CustomOverlays.svelte";
  import CustomTitleColors from "./CustomTitleColors.svelte";
  import AlternativeThumbnail from "./AlternativeThumbnail.svelte";
  import DisableAnimations from "./DisableAnimations.svelte";
  import Footer from "./Footer.svelte";
  import CustomThumbnail from "./CustomThumbnail.svelte";
</script>

<Intro />
<CustomPlayButton />
<CustomOverlays />
<CustomTitleColors />
<AlternativeThumbnail />
<DisableAnimations />
<CustomThumbnail />
<Footer />

<svelte:head>
  <title>Svelte Youtube Embed</title>
  <meta
    name="description"
    content="Embeds a clickable youtube thumbnail instead of the iframe. Upon clicking, loads the iframe."
  />
</svelte:head>

<style>
  :global(.controls) {
    display: flex;
    align-items: center;
    margin: 1rem auto;
  }
  :global(.controls label) {
    margin-left: 1em;
  }
</style>
