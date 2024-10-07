<template>
    <div class="container mt-5">
      <div class="row">
        <!-- 商品卡片1 -->
        <div class="col-md-4">
          <div class="card">
            <img src="https://via.placeholder.com/300" class="card-img-top" alt="商品图片">
            <div class="card-body">
              <h5 class="card-title">商品标题1</h5>
              <p class="card-text">这里是商品的简单描述。介绍商品的主要功能和优点。</p>
              <p class="card-text"><strong>价格: ¥99.00</strong></p>
              <a href="#" class="btn btn-primary">立即购买</a>
            </div>
          </div>
        </div>
        
        <!-- 商品卡片2 -->
        <div class="col-md-4">
          <div class="card">
            <img src="https://via.placeholder.com/300" class="card-img-top" alt="商品图片">
            <div class="card-body">
              <h5 class="card-title">商品标题2</h5>
              <p class="card-text">这里是商品的简单描述。介绍商品的主要功能和优点。</p>
              <p class="card-text"><strong>价格: ¥199.00</strong></p>
              <a href="#" class="btn btn-primary">立即购买</a>
            </div>
          </div>
        </div>

        <!-- 商品卡片3 -->
        <div class="col-md-4">
          <div class="card">
            <img src="https://via.placeholder.com/300" class="card-img-top" alt="商品图片">
            <div class="card-body">
              <h5 class="card-title">商品标题3</h5>
              <p class="card-text">这里是商品的简单描述。介绍商品的主要功能和优点。</p>
              <p class="card-text"><strong>价格: ¥299.00</strong></p>
              <a href="#" class="btn btn-primary">立即购买</a>
            </div>
          </div>
        </div>
      </div>

      <ul class="pager">
        <li class="previous">
        <a href="#">&larr; Previous</a>
        </li>
        <li class="next">
            <a href="#">Next &rarr;</a>
        </li>
</ul>

  </div>
    
</template>

<script>
  export default {
      name:"ProductsComponent",
  }
</script>
  
<style scoped>
 
</style>
  
  