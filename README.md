# Svelte Youtube Embed

Embeds a clickable youtube thumbnail instead of the iframe. Upon clicking, loads the iframe.

## Why?

- loads the site faster
- responsive image & video

## Installation

`npm i -D svelte-youtube-embed`

## Usage

```html
<script>
  import Youtube from "svelte-youtube-embed";
</script>

<Youtube id="q2Y3f0lHnMs" />
```

The `id` is youtube video id. In this video link `https://www.youtube.com/watch?v=q2Y3f0lHnMs`, the id is `q2Y3f0lHnMs`.

## Demo
[site](https://embed.sveltethemes.dev/)
