<template>
  <div ref="parent" class="snakegamemap">
        <canvas ref="canvas" class="map"></canvas>
</div>


</template>


<script>
import { GameMap } from '@/assets/script/snake/GameMap';
import { ref, onMounted } from 'vue';
export default {
  name:"SnakeView",
  setup() {
      let parent = ref(null);
      let canvas = ref(null);
    

      onMounted(() => {
        console.log("建立地图");
        new GameMap(canvas.value.getContext('2d'), parent.value);
      });

      return {
          parent,
          canvas
      }
    }
}


</script>

<style scoped>

div.snakegamemap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>