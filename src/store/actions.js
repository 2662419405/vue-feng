import { HOME_HOT, HOME_ESSENCE, HOME_ARTICLE } from '@/store/mutation-types'
import { getHomeHot, getEssenceData, getArticleData } from '@/service'

export default {
  [HOME_HOT]({ commit }) {
    return new Promise(resolve => {
      getHomeHot().then(res => {
        commit(HOME_HOT, res)
        resolve(res)
      })
    })
  },
  [HOME_ESSENCE]({ commit }) {
    return new Promise(resolve => {
      getEssenceData().then(res => {
        commit(HOME_ESSENCE, res)
        resolve(res)
      })
    })
  },
  [HOME_ARTICLE]({ commit }) {
    return new Promise(resolve => {
      getArticleData().then(res => {
        commit(HOME_ARTICLE, res)
        resolve(res)
      })
    })
  },
}
