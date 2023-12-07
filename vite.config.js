import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    {
      apply: "build",
      postcss: {
        plugins: [autoprefixer()],
      },
    },
  ],
  base: "./", // обновляем опцию base
  build: {
    outDir: resolve(__dirname, "docs"),
  },
});
