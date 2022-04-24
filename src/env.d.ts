/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-20 20:31:02
 * @LastEditTime: 2022-04-24 16:24:08
 */
/// <reference types="vite/client" />
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as axios from 'axios';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
}
