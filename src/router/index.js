import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
