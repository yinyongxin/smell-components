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
import UnoCSS from '@unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS(),
    preact({
      include: ["**/preact/*"],
    }),
    solidJs({
      include: ["**/solid/*"],
    }),
    vue(),
    mdx(),
  ],
});
