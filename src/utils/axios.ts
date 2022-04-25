/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-24 12:27:45
 * @LastEditTime: 2022-04-25 12:51:49
 */
const VueAxios = {
    vm: {},
    installed: false,
    install(Vue:any, instance:any) {
        if (this.installed) {
            return;
        }
        this.installed = true;
        if (!instance) {
            // eslint-disable-next-line no-console
            console.error('You have to install axios');
            return;
        }
        // eslint-disable-next-line no-param-reassign
        Vue.axios = instance;
        const prototype = Vue.config.globalProperties;
        prototype.axios = instance;
        prototype.$http = instance;
    },
};

export default VueAxios;
