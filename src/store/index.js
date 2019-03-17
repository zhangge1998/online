import Vue from 'vue'
import Vuex from 'vuex'
import mine from './modules/mine'
import getSession from './modules/getSession'
import getAddr from './modules/getAddr'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mine,
    getSession,
    getAddr
  }
})
