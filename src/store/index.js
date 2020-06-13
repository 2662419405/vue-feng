import Vuex from 'vuex'
import Vue from 'vue'
import mutations from '@/store/mutations'
import getters from '@/store/getters'
import action from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
  },
  mutations,
  getters,
  action,
})
