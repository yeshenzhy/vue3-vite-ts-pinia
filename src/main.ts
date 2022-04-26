/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-20 20:31:02
 * @LastEditTime: 2022-04-26 16:54:42
 */
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import * as Icons from '@ant-design/icons-vue';
import App from './App.vue';
import store from './store';
import { VueAxios } from './utils/request';
// 路由
import router from './router/index';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
// 全局导入antd icon
const addAntdIcon: () => void = ():void => {
    const icons: any = Icons;
    Object.keys(icons).forEach((key: string) => {
        app.component(key, icons[key]);
    });
};
addAntdIcon();

app.use(store);
app.use(router);
app.use(VueAxios);
app.use(Antd);
app.mount('#app');
