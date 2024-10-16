<template>
    <ContentBase>
        <div class="form-floating mb-3">
            <input v-model="username" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">用户名</label>
        </div>
        <div class="form-floating">
            <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">密码</label>
        </div>

        <div class="form-floating">
            <input  v-model ="confirmword" type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">确认密码</label>
        </div>

        <div>
            <button type="button" class="btn btn-primary" @click="register">注册</button>
        </div>
        <div>
            <span>
                {{ message }}
            </span>
        </div>

    </ContentBase>
    
  </template>
  
  <script>
 import ContentBase from '@/components/ContentBase.vue';
 import { ref } from "vue";
 import {useStore} from "vuex";
  export default{
    name :"RegisterView",
    components:{
        ContentBase
    },

    setup()
    {
        const message = ref("");
        const store = useStore();

        const username = ref("");
        const password = ref("");
        const confirmword = ref("");
        const register=()=>{
            
            store.dispatch('register',{username:username.value,password:password.value,confirmword:confirmword.value})
            .then(
                response=>{
                    message.value ="注册成功";
                    console.log("登录成功"+response.id);
                }
            )
            .catch(
                error=>{
                    message.value = error.message
                    console.error(error.message);
                }
            )
        }
        return {
            username,
            password,
            confirmword,
            message,
            register,
        }
    }
  
  }
  </script>
  
  <style scoped>
  div{
    margin-top: 10px;
  }
  button{
    float:right;

  }
  </style>
  