<script>
  import Youtube from "$lib/Youtube.svelte";
  import Prism from "./Prism.svelte";
</script>

<h2>Custom thumbnail</h2>
<p>
  Similar to how we can use custom play button, we can also use custom
  thumbnails.
</p>
<p>
  Use <strong>slot="thumbnail"</strong> to a image/picture html tag and place it
  inside <em>Yoututbe</em> component.
</p>

<Youtube id="EBtsu6naB8g">
  <img
    slot="thumbnail"
    src="https://kit.svelte.dev/_app/immutable/assets/svelte-kit-machine.93687d2d.avif"
    alt="A video on svelte"
    style="width: 100%; height: 100%; object-fit: contain; object-position: center; background: #ff4000"
  />
</Youtube>

<Prism
  code={`<Youtube id="EBtsu6naB8g">
  <img
    slot="thumbnail"
    alt="A video on svelte"
    src="/path/image.jpg"
    style="width: 100%; height: 100%; object-fit: contain; object-position: center; background: red"
  />
  <!-- inline styles are optional -->
</Youtube>
`}
/>
