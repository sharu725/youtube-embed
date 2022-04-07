import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    package: {
      dir: "package",
      emitTypes: true,
    },
  },
};

export default config;
