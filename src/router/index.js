import VueRouter from 'vue-router';
import Vue from 'vue';
const App = () => import('../page/HelloWorld.vue');
const Demo = () => import('../page/demo.vue');

Vue.use(VueRouter);

const routes = [
    {
        path: '/dd',
        name: 'home',
        component: Demo,
    },
    {
        path: '/de',
        name: 'path',
        component: App,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
