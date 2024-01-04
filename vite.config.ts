import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

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
      exclude: ['src/ignore'],
      staticImport: true,
      rollupTypes: true,
      // insertTypesEntry: true,
      compilerOptions: {
        declarationMap: true,
      },
      rollupConfig: {
        docModel: {
          enabled: true,
          apiJsonFilePath: '<projectFolder>/rollup-docs/<unscopedPackageName>.api.json',
        },
      },
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
      entry: resolve(__dirname, 'src/lib/main.ts'),
      name: 'rocket-ui-vue',
      fileName: 'rocket-ui-vue',
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
})
