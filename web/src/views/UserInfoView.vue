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
                        This is some text within a card body.
                    </div>
                </div>


            </div>
        </div>
    </ContentBase>

    
</template>
  
<script>
import ContentBase from '@/components/ContentBase.vue';
import UserInfoComponent from '@/components/userinfo/UserInfoComponent.vue';
import UserInfoFlatten from '@/components/userinfo/UserInfoFlatten.vue';

  export default{
    name :"UserInfoView",
    components:{
        ContentBase,
        UserInfoComponent,
        UserInfoFlatten
    } 
  
  }
  </script>
  
  <style scoped>
  .flatten{
    margin-top: 5%;
   
  }

  

  </style>
  