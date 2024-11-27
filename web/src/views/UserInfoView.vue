<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <div class="row-3">
                    <div class="card">
                        <div class="card-body">
                            <UserInfoComponent>
                               
                            </UserInfoComponent>
                        </div>
                    </div>

                </div>
                <div class="row-7">
                    <div class="text-end">
                        <UserInfoFlatten class="flatten">
                        </UserInfoFlatten>
                    </div>
                        
                    
                </div>


            </div>
            <div class="col-7">
                <div class="card">
                    <div class="card-body">
                        <UserDetailsInfo v-if="current === 'info' "></UserDetailsInfo>
                        <UserDetailsModify v-else-if="current === 'modify'"></UserDetailsModify>
                        <BotList v-else-if="current === 'bots'"></BotList>
                        <FriendsComponent v-else-if="current === 'friends'"></FriendsComponent>
                    </div>
                </div>


            </div>
        </div>
    </ContentBase>

    
</template>
  
<script>
import ContentBase from '@/components/ContentBase.vue';
import BotList from '@/components/userinfo/BotList.vue';
import FriendsComponent from '@/components/userinfo/FriendsComponent.vue';
import UserDetailsInfo from '@/components/userinfo/UserDetailsInfo.vue';
import UserDetailsModify from '@/components/userinfo/UserDetailsModify.vue';
import UserInfoComponent from '@/components/userinfo/UserInfoComponent.vue';
import UserInfoFlatten from '@/components/userinfo/UserInfoFlatten.vue';

  export default{
    name :"UserInfoView",
    components:{
        ContentBase,
        UserInfoComponent,
        UserInfoFlatten,
        UserDetailsInfo,
        UserDetailsModify,
        BotList,
        FriendsComponent
    }, 
    setup(){
        return {
            current:"modify"
        }


        
    }
  
  }
  </script>
  
  <style scoped>
  .flatten{
    margin-top: 5%;
   
  }

  

  </style>
  