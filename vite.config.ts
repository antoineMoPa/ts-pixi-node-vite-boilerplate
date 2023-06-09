import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'main.ts'),
            name: 'main.ts',
            fileName: (format) => `main.${format}.js`
        },
        rollupOptions: {
            input: 'main.ts',
            external: ['@pixi/mixin-get-{}-position', 'gl', 'path', 'fs', '@pixi/node', 'canvas'],
        },
        sourcemap: true,
    },
    define: {
        global: {},
    },
    plugins: [],
});
