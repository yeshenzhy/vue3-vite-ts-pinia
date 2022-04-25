/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-24 14:29:58
 * @LastEditTime: 2022-04-25 12:32:31
 */
import { createPinia } from 'pinia';
import useAppStore from './modules/app';
import useUserStore from './modules/user';

const pinia = createPinia();
export { useAppStore, useUserStore };
export default pinia;
