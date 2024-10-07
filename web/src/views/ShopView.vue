<template>
    <ContentBase>
      <ProductsComponent>



      </ProductsComponent>
       
    </ContentBase>
    
</template>
  
<script>
import ContentBase from '@/components/ContentBase.vue';
import ProductsComponent from '@/components/ProductsComponent.vue';


  export default{
    name :"ShopView",
    components:{
        ContentBase,
        ProductsComponent
    }
  
  }
  </script>
  
  <style scoped>
  </style>