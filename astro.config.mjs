// @ts-check
import { defineConfig } from "astro/config";
// @ts-ignore
import preact from "@astrojs/preact";
// @ts-ignore
import solidJs from "@astrojs/solid-js";
// @ts-ignore
import vue from "@astrojs/vue";
// @ts-ignore
import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact({
      include: ["**/preact/**/*"],
    }),
    solidJs({
      include: ["**/solid/**/*"],
    }),
    react({ include: ["**/react/**/*", "src/components/ui/**/*"] }),
    vue(),
    mdx(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
