import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import DevLog from './views/DevLog.vue'
import Apps from './views/Apps.vue'
import Resume from './views/Resume.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/devlog',
      name: 'devlog',
      component: DevLog
    },
    {
      path: '/apps',
      name: 'apps',
      component: Apps
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    }

  ]
})