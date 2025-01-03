import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/components/**/*.vue', 'src/lib/**/*.ts'],
      beforeWriteFile: (filePath, content) => {
        return {
          filePath: filePath.replace('/src/', '/'),
          content,
        }
      },
      copyDtsFiles: true,
      outDir: 'dist/types',
      staticImport: true,
      insertTypesEntry: true,
      compilerOptions: {
        declarationMap: true,
      },
    }),
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
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
