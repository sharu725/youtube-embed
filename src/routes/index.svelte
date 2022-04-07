<script>
  import Youtube from "$lib/Youtube.svelte";
</script>

<div class="container">
  <h1>Youtube Video Embed</h1>
  <p>
    This provides a fast way to embed youtube videos since it loads the youtube
    thumbnail istead of the iframe. It loads the iframe and starts playing upong
    clicking the play button.
  </p>
  <Youtube id="q2Y3f0lHnMs" />

</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
</style>
