import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    NowPage: 'Home',
    MenuOpen : false,
    Link:[{
      id:1,
      icon:"fas fa-university",
      href:"http://kumoh.ac.kr/ko/index.do",
      target:"_blank",
      rel:"noopener",
      name: "금오공과대학교 (KIT)"
    }, 
    {
      id: 2,
      icon: "fas fa-book",
      href: "http://ce.kumoh.ac.kr/ce/index.do",
      target: "_blank",
      rel: "noopener",
      name: "컴퓨터공학과 (CE)"
    },
    {
      id: 3,
      icon: "fas fa-envelope",
      href: "mailto:taese0ng@naver.com",
      target: "",
      rel: "noopener",
      name: "taese0ng@naver.com"
    },
    {
      id: 4,
      icon: "fab fa-github",
      href: "https://github.com/taese0ng?tab=repositories",
      target: "_blank",
      rel: "noopener",
      name: "taese0ng"
    },
    {
      id: 5,
      icon: "fab fa-instagram",
      href: "https://www.instagram.com/taese0_0ng/",
      target: "_blank",
      rel: "noopener",
      name: "#taese0_0ng"
    },
  ],
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
      },
      {
        id:5,
        name:"SchoolActivities",
        to:"/school_activities"
      },
      {
        id:6,
        name:"Self-Introduction",
        to:"/self_introduction"
      }
    ],
    Prize: [
      {
        id: 1,
        name: "논문경진대회 은상",
        image: require('@/assets/Prize/Paper.png')
      },
      {
        id: 2,
        name: "BM공모전 대상",
        image: require("@/assets/Prize/BM.png")
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
    },
    getLink(state){
      return state.Link
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
