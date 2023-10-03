import { defineConfig } from 'astro/config';
import aws from "astro-sst/lambda";
// https://astro.build/config
export default defineConfig({
    outDir: 'dist/client',
    adapter: aws(),
    output: "server",
});
