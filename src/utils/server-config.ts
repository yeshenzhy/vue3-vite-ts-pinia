/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-24 15:26:16
 * @LastEditTime: 2022-04-24 15:26:17
 */
export default {
    getServerUrl() {
        if (!CONFIG.api) {
            if (import.meta.env.MODE === 'development') {
                return import.meta.env.VITE_APP_BASE_API;
            } if (import.meta.env.MODE === 'mock') {
                return import.meta.env.VITE_APP_MOCK_API;
            }
            return import.meta.env.VITE_APP_TARGET_API;
        }
        return window.CONFIG.api;
    },
    getSwaggerUrl() {
        if (!window.CONFIG.api) {
            return import.meta.env.VITE_APP_TARGET_API;
        }
        return window.CONFIG.api;
    },
};
