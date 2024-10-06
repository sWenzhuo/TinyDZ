<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
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

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            用户
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">主页</a></li>
            <li><a class="dropdown-item" href="#">退出</a></li>
        
          </ul>
        </li>



        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            登录
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">注册</a></li>
          </ul>
        </li>


        
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Link</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="please input here" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">search</button>
      </form>
    </div>
  </div>
</nav>

</template>


<script>

export default {
    name:"NavBar",
}


</script>



<style scoped>

</style>