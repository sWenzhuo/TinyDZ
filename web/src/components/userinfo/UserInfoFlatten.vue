<template>
<div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group">
      <a class="list-group-item list-group-item-action" href="#" @click="current='info'">信息</a>
      <a class="list-group-item list-group-item-action" href="#" @click="current='bot'">bot</a>
      <a class="list-group-item list-group-item-action" href="#" @click="current='friends'">好友</a>
      <a class="list-group-item list-group-item-action" href="#" @click="current='setting'">设置</a>
    </div>
  </div>
  
</div>
    
</template>

<script>
  export default {
      name:"UserInfoComponent",
  }
</script>
  
<style scoped>


 
</style>
  
  