/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-20 20:40:29
 * @LastEditTime: 2022-04-20 21:38:26
 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
        CONFIG_MAP: false,
        CONFIG: false,
        THING: false,
        CMAP: false,
        config: false,
        uino: false,
        axios: false,
        reactive: true,
        spray: false,
    },
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 3,
            },
            multiline: {
                max: 1,
            },
        }],
    },
};
