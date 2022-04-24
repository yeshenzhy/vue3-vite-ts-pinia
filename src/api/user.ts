/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-24 15:06:13
 * @LastEditTime: 2022-04-24 16:26:17
 */
import request from '@/utils/request';

type Parameter = {
  [key: string]: string | number;
}
const userApi = {
    Login: '/auth/login',
    Logout: '/auth/logout',
    UserInfo: '/user/info',
};

export function login(data:Parameter) {
    return request({
        url: userApi.Login,
        method: 'post',
        data,
    });
}

export function getUserInfo(data:Parameter) {
    return request({
        url: userApi.UserInfo,
        method: 'get',
        params: data,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
}

export function logout() {
    return request({
        url: userApi.Logout,
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
}
