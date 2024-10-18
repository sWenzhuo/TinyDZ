<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <router-link class="navbar-brand" :to="{name:'home'}">Tiny DZ </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
            <router-link class="nav-link active" :to="{name:'pklist'}">排行榜</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link active" :to="{name:'shop'}">商城</router-link>
        </li>

        <li class="nav-item">
            <router-link class="nav-link active" :to="{name:'game'}">游戏中心</router-link>
        </li>


        <li  v-if="!islogined" class="nav-item">
          <router-link class="nav-link active" :to="{name:'login'}">登录</router-link>
        </li>


        <li  v-if="!islogined" class="nav-item">
          <router-link class="nav-link active" :to="{name:'register'}">注册</router-link>
        </li>

        <li v-else class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ username }}
          </a>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" :to="{name:'user',params:{id:userID}}">主页</router-link></li>
            <li><a class="dropdown-item" href="#" @click="logout">退出</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="在此搜索好友" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">搜索</button>
      </form>
    </div>
  </div>
</nav>

</template>


<script>

import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';


export default {
    name:"NavBar",
    setup()
    {
      const store = useStore();
      const router = useRouter();
    
      // 使用 computed 来读取 Vuex store 中的值
      const userID = computed(()=>store.getters.userID);
      const username = computed(() => store.getters.username);
      const islogined = computed(() => store.getters.isAuthenticated);
      const logout=()=>{
        store.dispatch('logout').then(()=>{
          router.push({name:'home'});//重定向
        })
      }

      return{
        userID,
        username,
        islogined,
        logout,
      }
    }
}





</script>



<style scoped>


</style>