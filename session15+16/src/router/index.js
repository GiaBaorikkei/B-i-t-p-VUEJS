import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Contact from '@/views/Contact.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'
import Product from '@/views/Product.vue'
import Detail from '@/views/Detail.vue'
import Dashboard from '@/views/Dashboard.vue'
import Account from '@/views/Account.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact},
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/:pathMatch(.*)*', component: NotFound },
  { path: '/product', component: Product },
  { path: '/detail', component: Detail },
  { path: '/dashboard', component: Dashboard },
  { path: '/account', component: Account },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
