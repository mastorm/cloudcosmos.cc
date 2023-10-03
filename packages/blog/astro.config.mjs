import { defineConfig } from 'astro/config';
import aws from "astro-sst/lambda";
// https://astro.build/config
export default defineConfig({
    adapter: aws(),
    output: "server",
});
