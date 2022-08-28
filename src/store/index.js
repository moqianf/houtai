//该文件用于创建store
import Vue from 'vue'
import Vuex from 'vuex'

const actions = {}
//mutations用于操作数据
const mutations = {
  Change(state) {
    state.isCollapse = !state.isCollapse
  }
}

const state = {
  isCollapse: false,
}

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  mutations,
  state
})

