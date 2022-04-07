<script>
  import Button from "./Button.svelte";
  export let id = null;
  let play = false;
</script>

<div class="yt">
  {#if play}
    <iframe
      src="https://www.youtube.com/embed/{id}?autoplay=1&rel=0"
      title="YouTube video player"
      frameborder="0"
      allow="autoplay"
      allowfullscreen
    />
  {:else}
    <img
      src="https://i.ytimg.com/vi/{id}/maxresdefault.jpg"
      alt="Youtube video"
      referrerpolicy="no-referrer"
    />
    <Button on:click={() => (play = true)} />
  {/if}
</div>

<style>
  .yt {
    position: relative;
  }

  img,
  iframe {
    height: auto;
    aspect-ratio: 16/9;
    width: 100%;
  }
</style>
