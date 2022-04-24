/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-24 14:36:48
 * @LastEditTime: 2022-04-24 16:25:49
 */
import { defineStore } from 'pinia';
import storage from 'store';
import { login as userLogin, logout as userLogout } from '@/api/user';

interface UserState {
  token?: string,
  name: string,
  avatar: string,
  roles: Array<string>,
  permissions: Array<string>,
}
type LoginData = {
    username: string;
    password: string;
}
const useUserStore = defineStore({
    id: 'user', // id必填，且需要唯一
    state: ():UserState => (
        {
            token: '',
            name: '',
            avatar: '',
            roles: [],
            permissions: [],
        }
    ),
    actions: {
        // Login
        async login(loginForm: LoginData) {
            try {
                const res = await userLogin(loginForm);
                storage.set('Access-Token', res.token);
            } catch (err) {
                storage.remove('Access-Token');
                throw err;
            }
        },
        // Logout
        async logout() {
            await userLogout();
            // this.resetInfo();
            storage.remove('Access-Token');
        },
    },
});
export default useUserStore;
