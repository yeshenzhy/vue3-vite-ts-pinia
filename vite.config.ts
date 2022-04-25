/*
 * @Author: zhy
 * @Date: 2021-11-30 15:43:56
 * @Description:
 * @LastEditTime: 2022-04-25 12:31:47
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const { resolve } = require('path');

const config = () => defineConfig({
    base: '/',
    plugins: [vue()],
    resolve: {
        alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData:
                `
                  @import "@/assets/style/reset.scss";
                `,
            },
        },
    },
    build: {
        sourcemap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
        rollupOptions: {
            output: {
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: 'js/[name]-[hash].js',
                assetFileNames: '[ext]/[name]-[hash].[ext]',
            },
        },

    },
    server: {
        hmr: {
            overlay: false,
        },
    },
});
export default config;
