<script>
  let {
    id = "",
    title = "",
    altThumb = "",
    play = false,
    short = false,
  } = $props();
</script>

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

<style>
  img {
    height: auto;
    aspect-ratio: var(--aspect-ratio);
    width: 100%;
  }

  .short-thumbnail {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: auto;
    max-width: none;
  }
</style>
