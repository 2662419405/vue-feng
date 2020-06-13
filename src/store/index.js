import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations';
import getters from './getters';
import action from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 1,
    },
    mutations,
    getters,
    action,
});
