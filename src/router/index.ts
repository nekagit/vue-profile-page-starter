import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/SOP/HomeView.vue'
import AboutView from '../views/SOP/AboutView.vue'
import ServicesView from '@/views/SOP/ServicesView.vue'
import GalleryView from '@/views/SOP/PortfolioView.vue'
import PricingView from '@/views/SOP/PricingView.vue'
import ContactView from '@/views/SOP/ContactView.vue'
import PortfolioView from '@/views/SOP/PortfolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
