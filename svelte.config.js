import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  kit: {
    adapter: adapter(),
  },
  package: {
    dir: "package",
    emitTypes: true,
    exports: (file) => file === "index.js",
  },
  optimizeDeps: {
    include: ["svelte-youtube-embed"],
  },
  ssr: {
    noExternal: ["svelte-youtube-embed"],
  },
  preprocess: [mdsvex(mdsvexConfig)],
};

export default config;
