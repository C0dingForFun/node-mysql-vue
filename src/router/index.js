import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '@/views/AboutView.vue';
import SignUpView from '@/views/LoginView.vue';
import FruitsView from '@/views/FruitsView.vue';


const routes = [
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/fruits',
    name: 'fruits',
    component: FruitsView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
