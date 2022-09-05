<script>
  import Button from "./Button.svelte";
  export let id = null;
  export let altThumb = false;

  let videoInfo = {};
  
  videoInfo = fetch(
    `//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
  ).then((res) => res.json());

  let play = false;
  const isCustomPlayButton = $$slots.default;
</script>

{#await videoInfo then data}
  <div
    class="you__tube"
    style="--aspect-ratio:{data.width / data.height || '16/9'}"
    title={data.title}
  >
    {#if play}
      <iframe
        src="https://www.youtube.com/embed/{id}?autoplay=1&rel=0"
        title={data.title}
        frameborder="0"
        allow="autoplay; picture-in-picture; clipboard-write"
        allowfullscreen
      />
    {:else}
      <img
        src="https://i.ytimg.com/vi/{id}/{altThumb
          ? 'hqdefault'
          : 'maxresdefault'}.jpg"
        title={data.title}
        alt="Youtube video: {data.title}"
        referrerpolicy="no-referrer"
      />
      <div class="b__overlay" on:click={() => (play = true)} />
      <div class="v__title"><h3>{data.title}</h3></div>
      <Button on:click={() => (play = true)} {isCustomPlayButton}>
        <slot />
      </Button>
    {/if}
  </div>
{/await}

<style>
  .you__tube {
    position: relative;
  }
  img,
  iframe {
    height: auto;
    aspect-ratio: var(--aspect-ratio);
    width: 100%;
  }
  .v__title {
    position: absolute;
    top: 0;
    width: 100%;
    background: linear-gradient(to bottom, hsla(0, 0%, 0%, 0.1), transparent);
    pointer-events: none;
  }
  .v__title h3 {
    font-family: var(
      --title-font-family,
      "Segoe UI",
      Geneva,
      Verdana,
      sans-serif
    );
    color: var(--title-color, #ffffff);
    padding: 0 2ch;
    font-weight: 400;
    text-shadow: 0px 1px 3px var(--title-shadow-color, rgb(0, 0, 0, 0.2));
  }
  .b__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: var(--aspect-ratio);
    cursor: pointer;
    transition: var(--overlay-transition, all 250ms ease-in-out);
  }
  .you__tube:hover .b__overlay {
    background: var(--overlay-bg-color, #00000030);
  }
</style>
