import { HOME_HOT } from '@/store/mutation-types'
import { getHomeHot } from '@/service'

export default {
  [HOME_HOT]({ commit }) {
    return new Promise(resolve => {
      getHomeHot().then(res => {
        commit(HOME_HOT, res)
        resolve(res)
      })
    })
  },
}
