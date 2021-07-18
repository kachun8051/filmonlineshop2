import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FilmList from '../views/FilmList.vue'
import FilmListDetail from '../views/FilmListDetail.vue'
import FilmSearchAdd from '../views/FilmSearchAdd.vue'
import StaffInfo from '../views/StaffInfo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/filmlist',
    name: 'FilmList',
    component: FilmList
  },
  {
    path: '/filmlistdetail',
    name: 'FilmListDetail',
    component: FilmListDetail
  },
  {
    path: '/staffinfo',
    name: 'StaffInfo',
    component: StaffInfo
  },
  {
    path: '/filmsearchadd',
    name: 'FilmSearchAdd',
    component: FilmSearchAdd
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
