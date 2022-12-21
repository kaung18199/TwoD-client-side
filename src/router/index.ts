import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
   },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/detailPost/:id',
    name : 'detailPost',
    component: () => import('../views/DetailPost.vue')
  },
  {
    path: '/playPage',
    name : 'playPage',
    component: ()=> import('../views/PlayView.vue')
  },
  {
    path: '/orderPage',
    name: 'orderPage',
    component: ()=> import('../views/OrderView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
