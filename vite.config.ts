import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      copyDtsFiles: true,
      outDir: [
        'dist',
        'types',
        // 'types/inner'
      ],
      // include: ['src/index.ts'],
      exclude: ['src/**/*.stories.ts', 'src/**/*.spec.ts'],
      // insertTypesEntry: true,
      compilerOptions: {
        declarationMap: true,
      },
      cleanVueFileName: true,
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'rocket-ui-vue',
      fileName: 'rocket-ui-vue',
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
});
