<script>
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import Iframe from "./Iframe.svelte";
  import Image from "./Image.svelte";

  let {
    id = null,
    altThumb = false,
    animations = true,
    thumbnail,
    play_button,
    short = false,
  } = $props();

  let title = $state("");

  let videoInfo = {};
  onMount(async () => {
    const res = await fetch(
      `//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
    );
    videoInfo = await res.json();
    title = videoInfo?.title;
  });

  let play = $state(false);
</script>

<div class="you__tube" style="--aspect-ratio:{short ? '9/16' : '16/9'}" {title}>
  {#if play}
    <Iframe {id} {title} {animations} />
  {:else}
    <Image {id} {title} {altThumb} {play} {short} {thumbnail} />
    <div
      class="b__overlay"
      onclick={() => (play = true)}
      onkeypress={() => (play = true)}
      aria-label="video overlay"
      role="button"
      tabindex="0"
    ></div>
    <div class="v__title">{title}</div>
  {/if}
  {#if !play}
    <Button bind:play {play_button}></Button>
  {/if}
</div>

<style>
  .you__tube {
    position: relative;
    aspect-ratio: var(--aspect-ratio, 16/9);
    overflow: hidden;
  }

  .v__title {
    position: absolute;
    top: 0;
    width: 100%;
    background: linear-gradient(to bottom, hsla(0, 0%, 0%, 0.1), transparent);
    pointer-events: none;
    padding: 1rem;
    font-family: var(
      --title-font-family,
      "Segoe UI",
      Geneva,
      Verdana,
      sans-serif
    );
    font-size: clamp(12px, 2.5vw, 18px);
    color: var(--title-color, #ffffff);
    font-weight: 400;
    text-shadow: 0px 1px 3px var(--title-shadow-color, rgb(0, 0, 0, 0.2));
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-height: 30%;
    box-sizing: border-box;
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
