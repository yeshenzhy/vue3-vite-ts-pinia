/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-24 16:20:38
 * @LastEditTime: 2022-04-24 16:20:39
 */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as axios from 'axios';

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
}
