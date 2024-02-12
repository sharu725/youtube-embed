<script>
  import Youtube from "$lib/Youtube.svelte";
  import Prism from "./Prism.svelte";

  const noCookieMode = true;
</script>

<h2>Enhanced Privacy Mode</h2>
<p>
  You can turn on <a
    href="https://support.google.com/youtube/answer/171780?hl=en#zippy=%2Cturn-on-privacy-enhanced-mode"
    target="_blank"
    rel="nofollow noopener noreferrer">Enhanced Privacy Mode</a
  > where the embedded player will not be used to personalize the YouTube browsing
  experience unless you play the video.
</p>

<Youtube id="EBtsu6naB8g" {noCookieMode} />

<Prism code={`<Youtube id="EBtsu6naB8g" noCookieMode={true} />`} />
