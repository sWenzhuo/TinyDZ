<template>
    <div class="container">
        <div class="col">
            <div class="row-4">
                <div class="text-center">
                    <img src="./logo.png" class="img-thumbnail custom-img" alt="这里是头像">
                </div>
                <div class="text-center">{{username}}</div>
            </div>
            <div class="row-2">
                <div class="text-center">
                    <button type="button" class="btn btn-success">关注</button>
                    <button type="button" class="btn btn-secondary">取消关注</button>
                </div>
            </div>
            <div class="row-2">
                <div class="text-center">
                    <div>好友数目 {{friends_num}}</div>
                    <div>bot数目 {{bots_num}}</div>
                </div>
            </div>

            <div class="row-2">
                <div class="text-center">
                    <div>最近来访</div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import {useStore} from "vuex";

export default {
      name:"UserInfoComponent",

      setup(){
        const store = useStore();
        const username =store.getters.username;
        const friends_num = store.getters.friends_num;
        const bots_num = store.getters.bots_num;



        console.log(username)

        return {
          username,
          friends_num,
          bots_num,


        }
    }

  }



</script>
  
<style scoped>
.custom-img{
    width: 50%; /* 相对于父元素的宽度 */
    height: auto; /* 高度自动调整 */
    border-radius: 70%;
}
 
</style>
  
  