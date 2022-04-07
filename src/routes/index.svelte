<script>
  import Youtube from "$lib/Youtube.svelte";
</script>

<div class="container">
  <h1>Youtube Video Embed</h1>
  <p>
    This provides a fast way to embed youtube videos since it loads the youtube
    thumbnail istead of the iframe. It loads the iframe and starts playing upong
    clicking the play button.
  </p>
  <Youtube id="q2Y3f0lHnMs" />

  <ul>
    <li>
      <a href="https://github.com/sharu725/youtube-embed">Github</a>
    </li>
    <li>
      <a href="https://www.npmjs.com/package/svelte-youtube-embed">npm</a>
    </li>
  </ul>
</div>

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
</style>
