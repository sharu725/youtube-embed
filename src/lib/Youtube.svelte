<script>
  import Button from "./Button.svelte";
  export let id = null;
  let play = false;
  const isCustomPlayButton = $$slots.default;
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
    <div class="overlay" on:click={() => (play = true)} />
    <Button on:click={() => (play = true)} {isCustomPlayButton}>
      <slot />
    </Button>
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
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 16/9;
    cursor: pointer;
    transition: var(--overlay-transition, all 250ms ease-in-out);
  }
  .yt:hover .overlay {
    background: var(--overlay-bg-color, rgba(0, 0, 0, 0.1));
  }
</style>
