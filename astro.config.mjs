// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // Ej: GH Pages, Netlify, Heroku, etc...
  site: "https://cbastian-araque.github.io",

  // Carpeta de alojamiento
  base: "/astro-blog/",

  integrations: [preact()]
});