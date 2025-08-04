// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import solidJs from "@astrojs/solid-js";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact({
      include: ["**/preact/*"],
    }),
    solidJs({
      include: ["**/solid/*"],
    }),
    vue(),
  ],
});
