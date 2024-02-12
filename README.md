# Svelte Youtube Embed

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Embeds a clickable youtube thumbnail instead of the iframe. Upon clicking, loads the iframe.

## Why?

- loads the site faster
- responsive image & video
- [less than 1KB (minified & gzipped)](https://bundlephobia.com/package/svelte-youtube-embed)

## Installation

```bash
npm i -D svelte-youtube-embed
```

## Usage

```html
<script>
  import Youtube from "svelte-youtube-embed";
</script>

<Youtube id="KrSH82gg7BQ" />

<!-- custom play button -->
<Youtube id="KrSH82gg7BQ">
  <button>play</button>
</Youtube>

<!-- Custom overlay -->
<Youtube
  id="KrSH82gg7BQ"
  --overlay-bg-color="hsla(0, 0%, 0%, 0.3)"
  --overlay-transition="all 100ms linear"
/>

<!-- Custom title -->
<Youtube
  id="kgZeIDSHlhQ"
  --title-color="#111111"
  --title-shadow-color="#cccccc"
  --title-font-family="Lato, sans-serif"
/>

<!-- Alternative thumbnail if default thumbnail doesn't show automatically -->
<Youtube id="g50dm1OCV3w" altThumb="{true}" />
```

The `id` is youtube video id. In this video link `https://www.youtube.com/watch?v=KrSH82gg7BQ`, the id is `KrSH82gg7BQ`.

## Demo

[site](https://embed.sveltethemes.dev/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://computly.me"><img src="https://avatars.githubusercontent.com/u/12211826?v=4?s=100" width="100px;" alt="Amr"/><br /><sub><b>Amr</b></sub></a><br /><a href="#design-416d72" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://webjeda.com"><img src="https://avatars.githubusercontent.com/u/8033084?v=4?s=100" width="100px;" alt="sharath Kumar"/><br /><sub><b>sharath Kumar</b></sub></a><br /><a href="#platform-sharu725" title="Packaging/porting to new platform">📦</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kohbanye"><img src="https://avatars.githubusercontent.com/u/66658420?v=4?s=100" width="100px;" alt="koh"/><br /><sub><b>koh</b></sub></a><br /><a href="https://github.com/sharu725/youtube-embed/commits?author=kohbanye" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://knarkzel.github.io"><img src="https://avatars.githubusercontent.com/u/85593302?v=4?s=100" width="100px;" alt="Knarkzel"/><br /><sub><b>Knarkzel</b></sub></a><br /><a href="https://github.com/sharu725/youtube-embed/issues?q=author%3Aknarkzel" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
