/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-24 16:01:46
 * @LastEditTime: 2022-04-24 16:01:46
 */

const TokenKey = 'Admin-Token';

export function getToken() {
    return localStorage.getItem(TokenKey);
}

export function setToken(token) {
    return localStorage.setItem(TokenKey, token);
}

export function removeToken() {
    return localStorage.removeItem(TokenKey);
}
