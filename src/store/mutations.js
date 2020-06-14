import { LOGIN, HOME_HOT, HOME_ESSENCE } from '@/store/mutation-types'
import { addCountAsync } from '@/service'

export default {
  [LOGIN](state) {
    const data = addCountAsync()
    state.count = state.count + data
  },
  [HOME_HOT](state, { data }) {
    state.home_hot = data.data.list
  },
  [HOME_ESSENCE](state, { data }) {
    state.essence = data.data.list
  },
}
