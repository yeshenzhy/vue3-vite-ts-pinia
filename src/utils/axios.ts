/*
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-24 12:27:45
 * @LastEditTime: 2022-04-24 14:04:14
 */
const VueAxios = {
    vm: {},
    installed: false,
    // eslint-disable-next-line no-unused-vars
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

        Object.defineProperties(Vue.prototype, {
            axios: {
                get: function get() {
                    return instance;
                },
            },
            $http: {
                get: function get() {
                    return instance;
                },
            },
        });
    },
};

export default VueAxios;
