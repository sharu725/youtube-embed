<script>
  let {
    id = "",
    title = "",
    altThumb = "",
    thumbnail,
    play = false,
    short = false,
  } = $props();
</script>

<div class="yt__thumb">
  {#if thumbnail}
    {@render thumbnail()}
  {:else}
    {#key play}
      <img
        src="https://i.ytimg.com/vi/{id}/{altThumb
          ? 'hqdefault'
          : 'maxresdefault'}.jpg"
        {title}
        alt="Youtube video: {title}"
        referrerpolicy="no-referrer"
        class:short-thumbnail={short}
      />
    {/key}
  {/if}
</div>

<style>
  :global(.yt__thumb img) {
    height: auto;
    aspect-ratio: var(--aspect-ratio);
    width: 100%;
  }

  .short-thumbnail {
    object-fit: cover;
    object-position: center;
    height: 100%;
    max-width: none;
  }
</style>
