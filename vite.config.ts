import Vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),
    Pages(),
    Layouts(),

    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/head', '@vueuse/core'],
      dts: 'src/types/auto-imports.d.ts',
    }),

    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [
        // auto import icons
        IconsResolver({ componentPrefix: '' }),
        HeadlessUiResolver(),
      ],

      dts: 'src/types/components.d.ts',
    }),

    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
  ],

  server: {
    host: 'localhost',
    port: 8080,
  },

  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
    exclude: ['vue-demi'],
  },
});
