<template>
  <MatchGround></MatchGround>
</template>
<script>
import MatchGround from "@/components/MatchGround.vue";
import {useStore} from "vuex";
import {onMounted, onUnmounted} from "vue";
import router from "@/router";


export default {
  name:"PkView",
  components:{
    // eslint-disable-next-line vue/no-unused-components
    MatchGround
  },
  setup(){

    const store = useStore();
    const socketUrl = `ws://localhost:8081/websocket/${store.state.user.userID}`;
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
        console.log(data.opponent_username);
        if(data.event=="start_matching")
        {
          store.commit('UpdateOpponent', data.opponent_username);
          // userphoto:data.opponent_userphoto,
          setTimeout(()=>{
            store.commit("UpdateStatus","playing");
          },2000);
          console.log("开始游戏");
          router.push("/snake")
        }
      }

      socket.onclose = () => {
        console.log("disconnected!");
      }
    })


    onUnmounted(()=>{
      //关闭webscoket链接

      store.commit("UpdateStatus","start-matching");
      socket.close();

    })
  }
}

</script>



<style scoped>

</style>