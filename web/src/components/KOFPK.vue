<template>
  <div ref="kof" class="kofmap"></div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { KOF } from "@/assets/script/KOF/Base";

export default {
  name: "KOFPK",
  setup() {
    const kof = ref(null);
    onMounted(() => {
      // 实例化KOF并将实际的DOM元素引用传递进去
      if (kof.value) {
        console.log(kof.value); // 确认输出是否是DOM元素
        new KOF(kof.value); // 使用kof.value来获取DOM元素
      } else {
        console.error("kof.value is null or undefined.");
      }
    });

    return {
      kof,
    }
  }
}
</script>

<style scoped>
div.kofmap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>