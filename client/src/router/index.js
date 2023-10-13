import { createRouter, createWebHistory } from 'vue-router'
import { authView, ChatView } from '../Views/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: authView
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView,
    }
  ]
})

export default router
