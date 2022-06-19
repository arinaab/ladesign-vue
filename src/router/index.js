import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView/MainView";

const routes = [
  {
    name: 'Main',
    path: '/',
    component: MainView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
