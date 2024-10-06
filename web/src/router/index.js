import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PKListView from '../views/HomeView.vue'
import GameView from '../views/HomeView.vue'
import ShopView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pklist',
    name: 'pklist',
    component: PKListView
  },
  {
    path: '/game',
    name: 'game',
    component: GameView
  },


  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  },

  
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
