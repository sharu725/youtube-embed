<script>
  import Youtube from "$lib/Youtube.svelte";
  let overlayBGColor = "#e5a50a";
  let overlayTransitionDuration = 50;

  let titleColor = "#000000";
  let titleShadowColor = "#ffffff";
  let titleFontFamily = "'Segoe UI', Geneva, Verdana, sans-serif";

  let altThumb = false;
</script>

<div class="container">
  <h1>Youtube Video Embed</h1>

  <p>
    This provides a fast way to embed youtube videos since it loads the youtube
    thumbnail istead of the iframe. It loads the iframe and starts playing upong
    clicking the play button.
  </p>

  <h2>Default</h2>
  <Youtube id="EBtsu6naB8g" />

```svelte
<Youtube id="EBtsu6naB8g" />
```

  <h2>With custom play button</h2>

  <Youtube id="EBtsu6naB8g">
    <button>play</button>
  </Youtube>

```svelte
<Youtube id="EBtsu6naB8g">
  <button>play</button>
</Youtube>
```

  <h2>Using custom overlay</h2>
  <div class="controls">
    <label for="overlay-color-select">Overlay color</label>
    <input id="overlay-color-select" type="color" bind:value={overlayBGColor} />
    <label for="overlay-transition-duration">Overlay transition duration</label>
    <input
      id="overlay-transition-duration"
      min="0"
      max="1000"
      type="range"
      step="50"
      bind:value={overlayTransitionDuration}
    />
  </div>

<Youtube
id="EBtsu6naB8g"
--overlay-bg-color="{overlayBGColor}30"
--overlay-transition="all {overlayTransitionDuration}ms linear"
/>

```svelte
<Youtube
id="EBtsu6naB8g"
--overlay-bg-color="{overlayBGColor}30"
--overlay-transition="all {overlayTransitionDuration}ms linear"
/>
```

  <h2>Using custom title colors</h2>
  <div class="controls">
    <label for="title-color-select">Title color</label>
    <input id="title-color-select" type="color" bind:value={titleColor} />
    <label for="title-shadow-color">Title shadow color</label>
    <input id="title-shadow-color" type="color" bind:value={titleShadowColor} />
    <label for="title-font-family">Font family</label>
    <select
      name="title-font-family"
      id="title-font-family"
      bind:value={titleFontFamily}
    >
      <option value="'Roboto', sans-serif">Roboto</option>
      <option value="'Segoe UI', Geneva, Verdana, sans-serif">Segoe UI</option>
      <option value="'Helvetica Neue', Helvetica, Arial, sans-serif"
        >Helvetica Neue</option
      >
      <option value="'Times New Roman', Times, serif">Times New Roman</option>
      <option value="'Courier New', Courier, monospace">Courier New</option>
    </select>
  </div>

<Youtube
id="KrSH82gg7BQ"
--title-color={titleColor}
--title-shadow-color="{titleShadowColor}30"
--title-font-family={titleFontFamily}
/>

```svelte
<Youtube
id="KrSH82gg7BQ"
--title-color={titleColor}
--title-shadow-color="{titleShadowColor}30"
--title-font-family={titleFontFamily}
/>
```

  <h2>Alternative thumbnail</h2>
  <p>
    Some videos don't have custom thumbnail, so you can use this option to set
    the thumbnail to the default one.
  </p>
  <div class="controls">
    <label for="alt-thumbnail-checkbox">Toggle</label>
    <input
      id="alt-thumbnail-checkbox"
      type="checkbox"
      bind:checked={altThumb}
    />
  </div>

<Youtube id="g50dm1OCV3w" {altThumb} />

```svelte
<Youtube id="g50dm1OCV3w" altThumb={true} />
```

  <ul>
    <li>
      <a href="https://github.com/sharu725/youtube-embed">Github</a>
    </li>
    <li>
      <a href="https://www.npmjs.com/package/svelte-youtube-embed">npm</a>
    </li>
  </ul>
</div>

<svelte:head>
<title>Svelte Youtube embed</title>
 <meta name="description" content="Embeds a clickable youtube thumbnail instead of the iframe. Upon clicking, loads the iframe.">
</svelte:head>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }
  li {
    margin-right: 1rem;
  }
  .controls {
    display: flex;
    align-items: center;
    margin: 1rem auto;
  }
  .controls label {
    margin-left: 1em;
  }
  pre {
    padding: 0.5em 1em;
    background-color: #e9e9e9;
    border: 1px solid rgb(180, 180, 180);
    border-radius: 3px;
    white-space: pre-wrap;
  }
</style>
