import Vue from 'vue'
import Vuex from 'vuex'
import path from "./Path";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    path
  }
})
