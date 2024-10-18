<template>
  <MatchGround></MatchGround>
</template>
<script>
import MatchGround from "@/components/MatchGround.vue";
import {useStore} from "vuex";
import {onMounted, onUnmounted} from "vue";

export default {
  name:"PkView",
  components:{
    // eslint-disable-next-line vue/no-unused-components
    MatchGround
  },
  setup(){

    const store = useStore();
    const socketUrl = `ws://127.0.0.1:8081/websocket/1/`;
    let socket = null;


    onMounted(()=>{
      //建立socket连接
      socket = new WebSocket(socketUrl);
      store.commit("UpdateSocket",socket);
      socket.onopen = () => {
        console.log("connected!");
        store.commit("updateSocket", socket);
      }
      //处理服务端接收过来的消息
      socket.onmessage = msg => {
        const data = JSON.parse(msg.data);
        if(data.event=="start_matching")
        {
          store.commit('UpdateOpponent', {
            username: data.opponent_username,
            userphoto: " ",
            userintroduction: data.opponent_userintroduction
          });
          setTimeout(()=>{
            store.commit("UpdateStatus","playing");
          },2000);
          console.log("开始游戏");
        }
      }

      socket.onclose = () => {
        console.log("disconnected!");
      }
    })
    onUnmounted(()=>{
      //关闭socket连接
      socket.close();
      store.commit("UpdateStatus","start-matching");

    })
  }
}

</script>



<style scoped>

</style>