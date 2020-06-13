import VueRouter from 'vue-router'
import Vue from 'vue'

const Layout = () => import('@/layout/defaultLayout')

const Demo = () => import('@/page/demo.vue')
const NotFound = () => import('@/page/404')

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home',
        component: Demo,
      },
      {
        path: '*',
        componnet: NotFound,
      },
    ],
  },
  {
    path: '*',
    componnet: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
