import Axios from 'axios'
const BASEURL = 'http://mock.shtodream.cn/mock'

export const addCountAsync = () => {
  return 1
}

/**
 * 首页数据
 */

export const getHomeHot = () => {
  return Axios.get(`${BASEURL}/5ee5dd146ead5918044f5059/vue/hot`)
}
export const getEssenceData = () => {
  return Axios.get(`${BASEURL}/5ee5dd146ead5918044f5059/vue/essence`)
}
export const getArticleData = () => {
  return Axios.get(`${BASEURL}/5ee5dd146ead5918044f5059/vue/article`)
}
