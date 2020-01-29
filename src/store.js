import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: "@/assets/BM.png",
    Prize: [
      {
        id: 1,
        name: "BM공모전 대상",
        image: require("@/assets/Prize/BM.png")
      },
    ]
  },
  getters: {
    getPrize(state) {
      return state.Prize;
    },
    getTest(state){
      return state.test;
    }
  },
  mutations: {
    
  },
  actions: {}
});
