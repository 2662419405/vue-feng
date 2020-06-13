import VueRouter from 'vue-router'
import Vue from 'vue'
/*  导入守卫  */
import { beforeRouter, afterRouter } from '@/router/beforeRouter'
/*  导入布局  */
const Layout = () => import('@/layout/defaultLayout')
/*  导入组件  */
const Tags = () => import('@/page/tags')
const NotFound = () => import('@/page/404')
const Home = () => import('@/page/home')

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home,
        meta: {
          title: '首页',
        },
      },
      {
        path: '/tags',
        component: Tags,
        meta: {
          title: '标签',
        },
      },
      {
        path: '/404',
        component: NotFound,
      },
    ],
  },
  {
    path: '*',
    redirect: '/404',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach(beforeRouter)
router.afterEach(afterRouter)

export default router
