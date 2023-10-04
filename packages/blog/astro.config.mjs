import { defineConfig } from 'astro/config';
import aws from "astro-sst/lambda";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  adapter: aws(),
  output: "server",
  integrations: [ tailwind()]
});