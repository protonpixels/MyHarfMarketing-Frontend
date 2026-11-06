import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PricingView from '@/views/PricingView.vue'
import AboutView from '@/views/AboutView.vue'
import HowItWorksView from '@/views/HowItWorksView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/pricing', name: 'pricing', component: PricingView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/how-it-works', name: 'how-it-works', component: HowItWorksView },
  { path: '/contact', name: 'contact', component: ContactView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
