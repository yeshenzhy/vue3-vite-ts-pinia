/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-24 14:36:48
 * @LastEditTime: 2022-04-24 14:45:44
 */
import { defineStore } from 'pinia';

const useAppStore = defineStore({
    id: 'app', // id必填，且需要唯一
    state: () => (
        {
            name: '张三',
            age: 28,
        }
    ),
});
export default useAppStore;
