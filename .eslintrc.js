/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-20 20:40:29
 * @LastEditTime: 2022-04-26 17:50:15
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
        'max-len': ['error', { code: 150, tabWidth: 4 }],
        'vue/html-indent': ['error', 4],
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'vue/max-attributes-per-line': ['error', { // 标签属性超过三个换行
            singleline: {
                max: 3,
            },
            multiline: {
                max: 1,
            },
        }],
        'vue/singleline-html-element-content-newline': 'off', // 单行html在一行显示
    },
};
