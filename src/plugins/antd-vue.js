import Vue from 'vue'
import AntDesign from 'ant-design-vue'
import VueLazyload from 'vue-lazyload'

if (process.env.NODE_ENV !== 'production') {
  require('ant-design-vue/dist/antd.min.css')
  Vue.use(AntDesign)
}

Vue.use(VueLazyload, {
  throttleWait: 0,
})
