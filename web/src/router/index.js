import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PKListView from '../views/PkListView.vue'
import GameView from '../views/GameView.vue'
import ShopView from '../views/ShopView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import UserDetailView from '@/views/UserDetailView.vue'
import SnakeView from "@/views/SnakeView.vue";
import PkView from "@/views/PkView.vue";
import KOFPKView from "@/views/KOFPKView.vue";

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


  {
    path:'/register',
    name:'register',
    component: RegisterView
  },

  {
    path:'/login',
    name:'login',
    component:LoginView
  }
  ,

  {
    path:'/user/:id',
    name:'user',
    component:UserDetailView,
    props:true
  },

  {
    path:"/pk",
    name:"pk",
    component: PkView,
  
  },

  {
    path:"/snake",
    name:"snake",
    component: SnakeView,
  
  },


  {
    path:"/kof",
    name:"kof",
    component:KOFPKView,
  }



  

  
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
