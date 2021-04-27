import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TablePagination',
    component: () => import('../components/TablePagination.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router