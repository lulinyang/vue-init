import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/'
        },
        {
            path: '/test',
            component: resolve => require(['@/view/echarts/test.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
