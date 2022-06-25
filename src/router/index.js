import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView/MainView";
import PortfolioView from "@/views/PortfolioView/PortfolioView";

const routes = [
  {
    name: 'Main',
    path: '/',
    component: MainView
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    component: PortfolioView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
