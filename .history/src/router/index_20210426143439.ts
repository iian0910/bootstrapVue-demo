import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Index.vue')
  },
  {
    path: '/tablePagination',
    name: 'TablePagination',
    component: () => import('../components/TablePagination.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
