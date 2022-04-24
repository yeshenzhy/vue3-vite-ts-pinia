/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-20 20:31:02
 * @LastEditTime: 2022-04-24 15:07:00
 */
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import store from './store';
import { VueAxios } from './utils/request';
// 路由
import router from './router/index';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(Antd);
app.use(router);
app.use(store);
app.use(VueAxios);
app.mount('#app');
