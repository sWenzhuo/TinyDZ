<template>
  <div class="matchground">
    <div class="row">
      <div class="col-4">
        <div class="user-photo">
          <img src="@/assets/logo.png" alt="">
        </div>
        <div class="user-username">
          {{username}}
        </div>
      </div>
      <div class="col-4">
        <div class="user-select-bot">
<!--          <select v-model="select_bot" class="form-select" aria-label="Default select example">-->
<!--            <option value="-1" selected>亲自出马</option>-->
<!--            <option v-for="bot in bots" :key="bot.id" :value="bot.id">-->
<!--              {{ bot.title }}-->
<!--            </option>-->
<!--          </select>-->
        </div>
      </div>
      <div class="col-4">
        <div class="user-photo">
          <img src="@/assets/logo.png " alt="">
        </div>
        <div class="user-username">
         {{op_username}}
        </div>
      </div>
      <div class="col-12" style="text-align: center; padding-top: 15vh;">
        <button class="btn btn-warning btn-lg" type="button"  @click="click_match_btn" >{{match_btn_info}}</button>
<!--        <button @click="click_match_btn" type="button" class="btn btn-warning btn-lg">{{ match_btn_info }}</button>-->
<!--      </div>-->
    </div>
  </div>
  </div>

</template>

<script>
import {ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "MatchGround",

  setup(){

    let match_btn_info = ref("开始匹配");
    const store = useStore();
    const click_match_btn =()=>{
      //点击按钮开始发信息匹配或者取消匹配
      if(match_btn_info.value==="开始匹配")
      {
        //利用socket发送给后端
        store.state.pk.socket.send(JSON.stringify({
              event: "start-matching"
            }
        ));

        match_btn_info.value="取消";

      }else if(match_btn_info.value==="取消")
      {
        //利用socket发送给后端
        store.state.pk.socket.send(JSON.stringify({
              event: "cancel-matching"
            }
        ));
        match_btn_info.value="开始匹配";
      }

    }
    return {
      click_match_btn,
      match_btn_info,
      username:store.state.username,
      op_username:store.state.pk.opponent_username,
    }
  }
}
</script>

<style scoped>
div.matchground {
  width: 60vw;
  height: 70vh;
  margin: 40px auto;
  background-color: rgba(50, 50, 50, 0.5);
}
div.user-photo {
  text-align: center;
  padding-top: 10vh;
}
div.user-photo > img {
  border-radius: 50%;
  width: 20vh;
}
div.user-username {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: white;
  padding-top: 2vh;
}
div.user-select-bot {
  padding-top: 20vh;
}
div.user-select-bot > select {
  width: 60%;
  margin: 0 auto;
}
</style>
