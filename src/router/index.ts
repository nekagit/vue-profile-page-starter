import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/SOP/HomeView.vue'
import AboutView from '../views/SOP/AboutView.vue'
import SchoolView from '@/views/SOP/SchoolView.vue'
import GalleryView from '@/views/SOP/SchoolView.vue'
import SportView from '@/views/SOP/SportView.vue'
import ContactView from '@/views/SOP/ContactView.vue'
  
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
      component: SchoolView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: SportView
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: SportView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
