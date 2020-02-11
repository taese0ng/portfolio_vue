import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Performance from './views/Performance.vue'
import Language from './views/Language.vue'
import SchoolActivities from './views/SchoolActivities.vue'
import Self_Introduction from './views/Self_Introduction.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/performance',
      name:'performance',
      component : Performance
    },
    {
      path: '/language',
      name: 'language',
      component: Language
    },
    {
      path: '/school_activities',
      name: 'SchoolActivities',
      component: SchoolActivities
    },
    {
      path: '/self_introduction',
      name: 'Self-Introduction',
      component: Self_Introduction
    }
  ]
})
