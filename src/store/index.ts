/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-24 14:29:58
 * @LastEditTime: 2022-04-24 14:55:50
 */
import { createPinia } from 'pinia';
import useAppStore from './modules/app';
import useUserStore from './modules/user';

const store = createPinia();

export default store;
export { useAppStore, useUserStore };
