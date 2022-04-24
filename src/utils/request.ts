/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-24 12:27:45
 * @LastEditTime: 2022-04-24 16:35:10
 */
import axios, {
    AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError,
} from 'axios';
import storage from 'store';
import { notification } from 'ant-design-vue';
// import store from '@/store';
import VueAxios from './axios';
import ServerConfig from '@/utils/server-config';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// 创建 axios 实例
const request:AxiosInstance = axios.create({
    // API 请求的默认前缀
    baseURL: process.env.VUE_APP_API_BASE_URL,
    timeout: 6000, // 请求超时时间
});
// axios中请求配置有baseURL选项，表示请求URL公共部分
request.defaults.baseURL = ServerConfig.getServerUrl();
// 异常拦截处理器
const errorHandler = (error: AxiosError) => {
    if (error.response) {
        const { data } = error.response;
        // 从 localstorage 获取 token
        const token = storage.get('Access-Token');
        if (error.response.status === 403) {
            notification.error({
                message: 'Forbidden',
                description: data.message,
            });
        }
        if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
            notification.error({
                message: 'Unauthorized',
                description: 'Authorization verification failed',
            });
            if (token) {
                // store.dispatch('Logout').then(() => {
                //     setTimeout(() => {
                //         window.location.reload();
                //     }, 1500);
                // });
            }
        }
    }
    return Promise.reject(error);
};

// request interceptor
request.interceptors.request.use((config:AxiosRequestConfig) => {
    const token = storage.get('Access-Token');
    // 如果 token 存在
    // 让每个请求携带自定义 token 请根据实际情况自行修改
    if (token) {
        if (config.headers) {
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${JSON.parse(token)}`; // 让每个请求携带自定义token 请根据实际情况自行修改
        }
    }
    return config;
}, errorHandler);

// response interceptor
request.interceptors.response.use((response:AxiosResponse) => response.data, errorHandler);

const installer = {
    vm: {},
    install(Vue:any) {
        Vue.use(VueAxios, request);
    },
};

export default request;

export {
    installer as VueAxios,
    request as axios,
};
