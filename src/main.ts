/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-20 20:31:02
 * @LastEditTime: 2022-04-21 19:09:18
 */
import { createApp } from 'vue';
import App from './App.vue';
// 路由
import router from './router/index';

const app = createApp(App);
app.use(router);
app.mount('#app');
