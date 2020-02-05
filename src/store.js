import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    NowPage: 'Home',
    MenuOpen : false,
    Menu:[
      {
        id:1,
        name:"Home",
        to: "/"
      },
      {
        id:2,
        name:"About",
        to: "/about"
      },
      {
        id:3,
        name:"Performance",
        to: "/performance"
      },
      {
        id:4,
        name:"Language",
        to: "/language"
      }

    ],
    Prize: [
      {
        id: 1,
        name: "BM공모전 대상",
        image: require("@/assets/Prize/BM.png")
      },
      {
        id: 2,
        name: "논문경진대회 은상",
        image: require('@/assets/Prize/Paper.png')
      },
    ],
    Languages: [
      {
        id:0,
        name:"Vue",
        image: require("@/assets/icons/vuejs_icon.png")
      },
      {
        id:1,
        name: "HTML",
        image: require("@/assets/icons/HTML.png")
      },
      {
        id: 2,
        name: "Python",
        image: require("@/assets/icons/Python.png")
      },
      {
        id: 3,
        name: "Java",
        image: require("@/assets/icons/Java.png")
      },
      {
        id: 4,
        name: "C++",
        image: require("@/assets/icons/C++.png")
      },
      {
        id: 5,
        name: "C#",
        image: require("@/assets/icons/C++++.png")
      },
      {
        id: 6,
        name: "MySQL",
        image: require("@/assets/icons/MySQL.png")
      },
    ]
  },
  getters: {
    getMenuOpen(state){
      return state.MenuOpen
    },
    getPrize(state) {
      return state.Prize
    },
    getLanguage(state){
      return state.Languages
    },
    getMenu(state){
      return state.Menu
    },
    getPage(state){
      return state.NowPage
    }
  },
  mutations: {
    turnMenu(state){
      state.MenuOpen = !state.MenuOpen
    },
    changePage(state, Change){
      state.NowPage = Change
    }
  },
  actions: {}
});
