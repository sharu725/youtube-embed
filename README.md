# Svelte Youtube Embed
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

<!-- custom play button -->
<Youtube id="q2Y3f0lHnMs">
  <button>play</button>
</Youtube>

<!-- Custom overlay -->
<Youtube id="q2Y3f0lHnMs" --overlay-bg-color="hsla(0, 0%, 0%, 0.3)" --overlay-transition="all 100ms linear" />

```

The `id` is youtube video id. In this video link `https://www.youtube.com/watch?v=q2Y3f0lHnMs`, the id is `q2Y3f0lHnMs`.

## Demo

[site](https://embed.sveltethemes.dev/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://computly.me"><img src="https://avatars.githubusercontent.com/u/12211826?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Amr</b></sub></a><br /><a href="#design-416d72" title="Design">🎨</a></td>
    <td align="center"><a href="https://webjeda.com"><img src="https://avatars.githubusercontent.com/u/8033084?v=4?s=100" width="100px;" alt=""/><br /><sub><b>sharath Kumar</b></sub></a><br /><a href="#platform-sharu725" title="Packaging/porting to new platform">📦</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!