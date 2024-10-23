<template>
  <div class="playground">
    <SnakePK/>
  </div>

</template>


<script>
import SnakePK from '@/components/SnakePK.vue';

export default{
  name:"SnakeView",
  components:{
    SnakePK
  }
}
</script>

<style scoped>
div.playground {
    width: 80vw;
    height: 80vh;
    margin: 40px auto;
}

</style>
