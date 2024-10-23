<template>
  <div class="playground">
    <KOFPK></KOFPK>
  </div>

</template>

<script>
import KOFPK from "@/components/KOFPK.vue";

export default {
  name:"KOFPKView",
  components:{
    KOFPK,
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