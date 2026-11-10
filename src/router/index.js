import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PricingView from '@/views/PricingView.vue'
import AboutView from '@/views/AboutView.vue'
import HowItWorksView from '@/views/HowItWorksView.vue'
import ContactView from '@/views/ContactView.vue'
import ServicesView from '@/views/ServicesView.vue'
import LocationView from '@/views/LocationView.vue'
import RoofersView from '@/views/RoofersView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Website Optimization for Hudson Valley Roofing Contractors | MyHarf', description: 'Find the website and local visibility issues that make homeowners hesitate. MyHarf helps Hudson Valley roofing contractors improve their online customer experience. Get a free leak check.' } },
  { path: '/pricing', name: 'pricing', component: PricingView, meta: { title: 'Pricing | Website Improvements for Contractors | MyHarf', description: 'Explore MyHarf fixed-price website improvement packages and optional monthly support for independent Hudson Valley contractors.' } },
  { path: '/about', name: 'about', component: AboutView, meta: { title: 'About MyHarf | Practical Digital Help for Local Contractors', description: 'Meet MyHarf and learn about a practical, diagnostic-first approach to website improvements for Hudson Valley contractors.' } },
  { path: '/how-it-works', name: 'how-it-works', component: HowItWorksView, meta: { title: 'How the MyHarf Website Leak Check Works', description: 'See how MyHarf reviews a contractor website, prioritizes practical improvements, and provides optional ongoing support.' } },
  { path: '/contact', name: 'contact', component: ContactView, meta: { title: 'Get a Free Website Leak Check | MyHarf', description: 'Send MyHarf your website for a free, no-obligation review. Get three prioritized findings for your contractor website.' } },
  { path: '/services', name: 'services', component: ServicesView, meta: { title: 'Website, Conversion & Local SEO Services | MyHarf', description: 'Explore practical website usability, lead capture, Google Business Profile, and local SEO improvements for Hudson Valley contractors.' } },
  { path: '/industries/roofing-contractors', name: 'roofing-contractors', component: RoofersView, meta: { title: 'Website Help for Roofing Contractors | MyHarf', description: 'Website usability, conversion, and local visibility improvements designed around how homeowners choose roofing contractors.' } },
  { path: '/locations/:city(kingston-ny|new-paltz-ny|poughkeepsie-ny)', name: 'location', component: LocationView, props: true, meta: { title: 'Local Website Optimization for Hudson Valley Contractors | MyHarf', description: 'Website and local visibility improvements for roofing contractors serving the Hudson Valley.' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

router.afterEach(to => {
  const title = to.meta.title || 'MyHarf | Website Improvements for Hudson Valley Contractors'
  const description = to.meta.description || 'Practical website and local visibility improvements for Hudson Valley contractors.'
  document.title = title

  let descriptionTag = document.querySelector('meta[name="description"]')
  if (!descriptionTag) {
    descriptionTag = document.createElement('meta')
    descriptionTag.setAttribute('name', 'description')
    document.head.appendChild(descriptionTag)
  }
  descriptionTag.setAttribute('content', description)

  const canonicalUrl = new URL(to.fullPath, window.location.origin).href
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', canonicalUrl)

  let ogTitle = document.querySelector('meta[property="og:title"]')
  if (!ogTitle) {
    ogTitle = document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    document.head.appendChild(ogTitle)
  }
  ogTitle.setAttribute('content', title)

  let ogDescription = document.querySelector('meta[property="og:description"]')
  if (!ogDescription) {
    ogDescription = document.createElement('meta')
    ogDescription.setAttribute('property', 'og:description')
    document.head.appendChild(ogDescription)
  }
  ogDescription.setAttribute('content', description)
})

export default router
