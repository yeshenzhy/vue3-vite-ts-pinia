/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-21 17:12:39
 * @LastEditTime: 2022-04-21 19:13:12
 */
/*
 * @Description  : 路由
 * @Author       : yanhuan
 * @Date         : 2022-03-18 11:34:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime : 2022-04-18 15:10:58
 */
import {
    createRouter, createWebHistory, RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/home/Index.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/about/Index.vue'),
    },
    {
        path: '/',
        redirect: {
            path: '/home',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
