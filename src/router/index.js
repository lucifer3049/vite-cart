import { createRouter, createWebHashHistory } from 'vue-router'
import ProductLits from '@/components/ProductLits.vue'
import CartLits from '../components/CartLits.vue'


const routes = [
  {
    path: '/',
    name: '產品列表',
    component: ProductLits
  },
  {
    path: '/cart',
    name: 'CartLits',
    component: CartLits,
    props: true //允許接收路由參數
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
