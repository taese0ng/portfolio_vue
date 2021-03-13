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
        name: "금오공과대학교 (KIT)",
      },
      {
        id: 2,
        icon: "fas fa-book",
        href: "http://ce.kumoh.ac.kr/ce/index.do",
        target: "_blank",
        rel: "noopener",
        name: "컴퓨터공학과 (CE)",
      },
      {
        id: 3,
        icon: "fas fa-envelope",
        href: "mailto:taese0ng@naver.com",
        target: "",
        rel: "noopener",
        name: "taese0ng@naver.com",
      },
      {
        id: 4,
        icon: "fab fa-github",
        href: "https://github.com/taese0ng?tab=repositories",
        target: "_blank",
        rel: "noopener",
        name: "taese0ng",
      },
      {
        id: 5,
        icon: "fab fa-instagram",
        href: "https://www.instagram.com/taese0_0ng/",
        target: "_blank",
        rel: "noopener",
        name: "#taese0_0ng",
      },
    ],
    Menu: [
      {
        id: 1,
        name: "Home",
        to: "/",
      },
      {
        id: 2,
        name: "Activities",
        to: "/activities",
      },
      {
        id: 3,
        name: "Skill",
        to: "/skill",
      },

      {
        id: 4,
        name: "Award",
        to: "/award",
      },
      {
        id: 5,
        name: "Project",
        to: "/project",
      },
      {
        id: 6,
        name: "About",
        to: "/about",
      },
      // {
      //   id: 7,
      //   name: "Self-Introduction",
      //   to: "/self_introduction"
      // },
    ],
    Prize: [
      {
        id: 1,
        name: "논문경진대회 은상",
        image: require("@/assets/Prize/Paper.png"),
      },
      {
        id: 2,
        name: "BM공모전 대상",
        image: require("@/assets/Prize/BM.png"),
      },
      {
        id: 3,
        name: "논문경진대회 동상",
        image: require("@/assets/Prize/Paper2.png"),
      },
      {
        id:4,
        name: 'OPIC IH',
        image: require("@/assets/Prize/Opic.png")
      }
    ],
    Languages: [
      {
        id: 0,
        name: "Vue",
        image: require("@/assets/icons/Vue.png"),
      },
      {
        id: 1,
        name: "Vuetify",
        image :require("@/assets/icons/Vuetify.png")
      },
      {
        id: 2,
        name: "React",
        image: require("@/assets/icons/React.png"),
      },
      {
        id: 3,
        name: "ReactNative",
        image: require("@/assets/icons/React.png"),
      },
      {
        id: 4,
        name : "JavaScript",
        image: require("@/assets/icons/JavaScript.png")
      },
      {
        id: 5,
        name: "HTML",
        image: require("@/assets/icons/HTML.png"),
      },
      {
        id: 6,
        name : "CSS",
        image: require("@/assets/icons/CSS.png")
      },
      {
        id: 7,
        name: "Bootstrap",
        image: require("@/assets/icons/Bootstrap.png"),
      },
      
    ],
    Activities: [
      {
        from: new Date(2015, 2),
        title: "학생회",
        description:
          "금오공과대학교 컴퓨터공학과 학생회 사무차장으로서 학생회 활동을 하였음.",
      },
      {
        from: new Date(2016, 2),
        title: "셈틀꾼 멘토",
        description:
          "컴퓨터공학과 학술동아리 '셈틀꾼'에서 16학년도 신입생을 대상으로 C언어 전공과목 멘토를 진행함.",
      },
      {
        from: new Date(2018, 8),
        title: "셈틀꾼 멘토",
        description:
          "군복학 후 학술동아리 '셈틀꾼'에서 18학년도 신입생을 대상으로 C언어 전공과목 멘토를 진행함.",
      },
      {
        from: new Date(2018, 10),
        title: "System Software Lab",
        description:
          "컴퓨터공학과 System Software Lab의 연구원으로 활동을 시작함.",
      },
      {
        from: new Date(2019, 2),
        title: "셈틀꾼 회장 & 멘토",
        description:
          "학술동아리 '셈틀꾼'의 회장직을 맡고 동아리 운영을 함과 동시에 19학년도 신입생을 대상으로 Python 전공과목 멘토를 진행함.",
      },
      {
        from: new Date(2019, 5),
        title: "KIT 전공탐색가이드 5기",
        description:
          "입학관리본부 소속으로 학교와 본인의 학과인 컴퓨터공학과를 알리는 'KIT 전공탐색가이드'활동을 시작함. 고교에 다니면서 학교와 학과에대한 이해를 시켜주는 등의 활동을 함.",
      },
      {
        from: new Date(2019, 7),
        title: "신입생 멘토",
        description:
          "19학년도 신입생을 대상으로 학교적응을 위한 멘토활동과, 다양한 교내활동을 안내 해주며 신입생들이 학교생활에 익숙해질 수 있도록 멘토링을 진행함.",
      },
      {
        from: new Date(2019, 8),
        title: "전공멘토(Linux)",
        description:
          "전공과목 'Linux 프로그래밍'의 멘토로 선정되어 2학년 학우들을 대상으로 해당 교과목의 이해를 돕기위한 조교 및 멘토링을 진행함.",
      },
      {
        from: new Date(2020, 1),
        title: "KIT 전공탐색가이드 6기",
        description:
          "입학관리본부 소속으로 학교와 본인의 학과인 컴퓨터공학과를 알리는 'KIT 전공탐색가이드'활동을 5기에 이어서 6기활동을 수행함.",
      },
      {
        from: new Date(2020, 2),
        title: "셈틀꾼 멘토",
        description:"컴퓨터공학과 학술동아리 '셈틀꾼'에서 20학년도 신입생을 대상으로 Python 전공과목 멘토를 진행함."
      },
      {
        from: new Date(2020, 6),
        title: "셈틀꾼 웹프로그래밍 멘토",
        description: "컴퓨터공학과 학술동아리 '셈틀꾼'에서 동아리원을 대상으로 'html', 'css', 'javascript'등 Web FrontEnd 멘토링을 진행함."
      },
      {
        from: new Date(2020,11),
        title: "벙커키즈 프론트엔드 개발자 입사,",
        description: "스타트업 벙커키즈의 프론트엔드 개발자로 입사하여, Web, App 개발을 하고있음. 주 개발스택은 React, React-Native를 사용하고 있으며, 현재 메인 서비스로 운영중."
      }
    ],
    Project: [
      {
        id:1,
        name: "CoronaCatch",
        // src: "https://www.coronacatch.com/home",
        git: "https://github.com/taese0ng/CoronaCatch",
        isOpen: false,
        visible: true,
        content: [
          "잡아라 코로나 Corona Catch",
          "코로나 감염 통계 / 마스크 현황 지도 제공",
          "'Vue.JS를 이용한 프론트엔드 개발'",
          "'마스크맵 구축'",
          "'ssh 인증 및 네이버 클라우드 플랫폼 사용'",
          "'2020/02 ~ 2020/08 마스크API 종료로인한 서비스 종료'"
        ],
        mainImg: require("@/assets/Project/Coronacatch/CoronaCatch.png"),
        img: [
          require("@/assets/Project/Coronacatch/1.png"),
          require("@/assets/Project/Coronacatch/2.png"),
          require("@/assets/Project/Coronacatch/3.png"),
          require("@/assets/Project/Coronacatch/4.png"),
          require("@/assets/Project/Coronacatch/5.png"),
          require("@/assets/Project/Coronacatch/6.png"),
        ],
        thesis : null,
      },
      {
        id: 2,
        name: "KUMO Craft",
        // src: "http://kumocraft.mcmc.kr",
        git: "https://github.com/taese0ng/minecraft_semtle",
        isOpen: false,
        visible: true,
        content: [
          "금오공과대학교 마인크래프트 모여라",
          "'React.JS를 이용한 프론트엔드 개발'",
          "PWA 적용 웹앱 구현완료",
          "'BootStrap 적용'",
          "'2020/10/1 부로 폐쇄'"
        ],
        mainImg: require("@/assets/Project/KUMOCraft/KUMOCraft.png"),
        img: [
          require("@/assets/Project/KUMOCraft/1.png"),
          require("@/assets/Project/KUMOCraft/2.png"),
          require("@/assets/Project/KUMOCraft/3.png"),
          require("@/assets/Project/KUMOCraft/4.png"),
          require("@/assets/Project/KUMOCraft/5.png"),
        ],
        thesis : null,
      },
      {
        id: 3,
        name: "MAPMO",
        src: "https://play.google.com/store/apps/details?id=kr.kumoh.mapmo",
        git: "https://github.com/taese0ng/MapmoProject",
        isOpen: false,
        visible: true,
        content: [
          "지도에 메모를 더하다. MAPMO",
          "지도에 메모를 하여 근처에 접근하면 메모의 내용을 알림.",
          "'geofencing기술과 realtime database를 활용.'",
          "'메모와 사용자위치간의 실시간 거리 측정 및 알림 기능을 개발.'",
          "'UI 담당'",
        ],
        mainImg: require("@/assets/Project/MAPMO/MAPMO.png"),
        img: [
          require("@/assets/Project/MAPMO/1.png"),
          require("@/assets/Project/MAPMO/2.png"),
          require("@/assets/Project/MAPMO/3.png"),
          require("@/assets/Project/MAPMO/4.png"),
          require("@/assets/Project/MAPMO/5.png"),
          require("@/assets/Project/MAPMO/6.png"),
          require("@/assets/Project/MAPMO/7.png"),
          require("@/assets/Project/MAPMO/8.png"),
          require("@/assets/Project/MAPMO/9.png"),
          require("@/assets/Project/MAPMO/10.png"),
          require("@/assets/Project/MAPMO/11.png"),
        ],
        thesis : "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE09273306",
      },
      {
        id: 4,
        name: "Semtle Project",
        src: "http://sbmi.iptime.org/",
        git: "https://github.com/taese0ng/semtleProject-front",
        isOpen: false,
        visible: true,
        content: [
          "셈틀꾼 공식 홈페이지",
          "셈틀꾼 회원 전용 프로젝트 공고, 게시, 질문 사이트",
          "'vue.js, vuetify를 사용하여 개발'",
          "'관리자 페이지를 통한 인원관리 구현'",
          "'프론트엔드 팀장 담당'",
        ],
        mainImg: require("@/assets/Project/SemtleProject/mainLogo.png"),
        img: [
          require("@/assets/Project/SemtleProject/1.png"),
          require("@/assets/Project/SemtleProject/2.png"),
          require("@/assets/Project/SemtleProject/3.png"),
          require("@/assets/Project/SemtleProject/4.png"),
          require("@/assets/Project/SemtleProject/5.png"),
          require("@/assets/Project/SemtleProject/6.png")
        ],
        thesis : null,
      },

    ],
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
    getActivities(state) {
      return state.Activities;
    },
    getProject(state) {
      return state.Project;
    },
  },
  mutations: {
    turnMenu(state) {
      state.MenuOpen = !state.MenuOpen;
    },
    changePage(state, Change) {
      state.NowPage = Change;
    },
    setProjectImgOpen(state, id) {
      for (var i = 0; i < state.Project.length; i++) {
        if (state.Project[i].id == id) {
          state.Project[i].isOpen = !state.Project[i].isOpen;
        } else {
          state.Project[i].visible = !state.Project[i].visible;
        }
      }
    },
  },
  actions: {},
});
