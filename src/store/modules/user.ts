/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-24 14:36:48
 * @LastEditTime: 2022-04-25 12:33:29
 */
import { defineStore } from 'pinia';
import { setToken, removeToken } from '@/utils/auth';
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
                setToken(res.token);
            } catch (err) {
                removeToken();
                throw err;
            }
        },
        // Logout
        async logout() {
            await userLogout();
            // this.resetInfo();
            removeToken();
        },
    },
});
export default useUserStore;
