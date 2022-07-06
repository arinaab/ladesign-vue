import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView/MainView";
import PortfolioView from "@/views/PortfolioView/PortfolioView";
import CurrentWork from "@/views/CurrentWork/CurrentWork";
import PriceView from "@/views/PriceView/PriceView";
import ContactsView from "@/views/ContactsView/ContactsView";

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
  },
  {
    name: 'Work',
    path: '/portfolio:id',
    component: CurrentWork
  },
  {
    name: 'Price',
    path: '/price',
    component: PriceView
  },
  {
    name: 'Contacts',
    path: '/contacts',
    component: ContactsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
