import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    NowPage: "Home",
    MenuOpen: false,
    Link: [
      {
        id: 1,
        icon: "fas fa-university",
        href: "http://kumoh.ac.kr/ko/index.do",
        target: "_blank",
        rel: "noopener",
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
      }
    ],
    Menu: [
      {
        id: 1,
        name: "Home",
        to: "/"
      },
      {
        id: 2,
        name: "About",
        to: "/about"
      },
      {
        id: 3,
        name: "Performance",
        to: "/performance"
      },
      {
        id: 4,
        name: "Language",
        to: "/language"
      },
      {
        id: 5,
        name: "SchoolActivities",
        to: "/school_activities"
      },
      {
        id: 6,
        name: "Self-Introduction",
        to: "/self_introduction"
      },
      {
        id: 7,
        name: "Project",
        to: "/project"
      }
    ],
    Prize: [
      {
        id: 1,
        name: "논문경진대회 은상",
        image: require("@/assets/Prize/Paper.png")
      },
      {
        id: 2,
        name: "BM공모전 대상",
        image: require("@/assets/Prize/BM.png")
      }
    ],
    Languages: [
      {
        id: 0,
        name: "Vue",
        image: require("@/assets/icons/vuejs_icon.png")
      },
      {
        id: 1,
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
      }
    ],
    SchoolActivities: [
      {
        from: new Date(2015, 2),
        title: "학생회",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2016, 2),
        title: "셈틀꾼 멘토",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2018, 8),
        title: "셈틀꾼 멘토",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2018, 10),
        title: "System Software Lab",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2019, 2),
        title: "셈틀꾼 회장",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2019, 5),
        title: "KIT 전공탐색가이드 5기",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2019, 7),
        title: "신입생 멘토",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2019, 8),
        title: "전공멘토(Linux)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2020, 1),
        title: "KIT 전공탐색가이드 6기",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      }
    ]
  },
  getters: {
    getMenuOpen(state) {
      return state.MenuOpen;
    },
    getPrize(state) {
      return state.Prize;
    },
    getLanguage(state) {
      return state.Languages;
    },
    getMenu(state) {
      return state.Menu;
    },
    getPage(state) {
      return state.NowPage;
    },
    getLink(state) {
      return state.Link;
    },
    getSchoolActivities(state) {
      return state.SchoolActivities;
    }
  },
  mutations: {
    turnMenu(state) {
      state.MenuOpen = !state.MenuOpen;
    },
    changePage(state, Change) {
      state.NowPage = Change;
    }
  },
  actions: {}
});
