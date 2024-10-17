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


        <div>
            <button type="button" class="btn btn-primary" @click="login">登录</button>
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
 import {ref } from "vue";
 import {useStore} from "vuex";
  export default{
    name :"LoginView",
    components:{
        ContentBase
    },
    setup()
    {
        const store = useStore();
        const message = ref("");
        const username = ref("");
        const password = ref("");
        const login=()=>{
            store.dispatch('login',{username:username.value,password:password.value})
            .then(
                response=>{
                    message.value = response.message;
                    console.log("登录成功");
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
            message,
            login,
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
  