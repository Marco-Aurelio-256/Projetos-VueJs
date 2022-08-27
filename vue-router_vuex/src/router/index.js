import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/bira',
    name: 'bira',
    component: () => import('@/views/BiraView.vue')
  },
  {
    path: '/usuario/:id',
    name: 'usuario-editar',
    component: () => import('@/views/UserEdit.vue')
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: () => import('@/views/products/ProductsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
