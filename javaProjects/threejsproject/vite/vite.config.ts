import { defineConfig } from 'vite'

export default defineConfig({
    // ...
    build: {
        target: 'es2015',
        outDir: 'dist/vite',
        rollupOptions: {
            input: '../src/main.ts',
        },
    },
})
