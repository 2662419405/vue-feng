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
const Login = () => import('@/page/login')
const Code = () => import('@/page/code')
const Album = () => import('@/page/album')
const Tool = () => import('@/page/tool')

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
        path: '/login',
        component: Login,
        meta: {
          title: '登录',
        },
      },
      {
        path: '/code',
        component: Code,
        meta: {
          title: '热门框架',
        },
      },
      {
        path: '/album',
        component: Album,
        meta: {
          title: '相册',
        },
      },
      {
        path: '/tool',
        component: Tool,
        meta: {
          title: '工具',
        },
      },
      {
        path: '/404',
        component: NotFound,
        meta: {
          title: ' 登录失败',
        },
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
