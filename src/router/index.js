import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Orders from '../views/Orders.vue'
import OrdersHeatmap from '../views/OrdersHeatmap.vue'
import Merchants from '../views/Merchants.vue'
import Customers from '../views/Customers.vue'
import Settings from '../views/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/orders-heatmap',
    name: 'OrdersHeatmap',
    component: OrdersHeatmap
  },
  {
    path: '/merchants',
    name: 'Merchants',
    component: Merchants
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router