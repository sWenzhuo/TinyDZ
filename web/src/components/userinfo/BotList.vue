<template>
   <div class="card">
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col-2">
                    <div class="col text-center">
                        <div class="row-5">
                            <img src="./logo.png" class="img-thumbnail custom-img" alt="这里是头像">
                        </div>
                        <div class="row-5 num">
                            1
                        </div>
                </div>
                    
                </div>
                <div class="col-5">
                    <div class="col">
                        <div class="row-5">bot名称</div>
                        <div class="row-5">bot描述</div>
                        <div class="row-5">bot积分: 1000分</div>
                    </div>
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-success">编辑</button>
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-dark">删除</button>

                </div>
            </div>
        </div>
    </div>


    <div class="card">
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col-2">
                    <div class="col text-center">
                        <div class="row-5">
                            <img src="./logo.png" class="img-thumbnail custom-img" alt="这里是头像">
                        </div>
                        <div class="row-5 num">
                            2
                        </div>
                </div>
                    
                </div>
                <div class="col-5">
                    <div class="col">
                        <div class="row-5">bot名称</div>
                        <div class="row-5">bot描述</div>
                        <div class="row-5">bot积分: 1000分</div>
                    </div>
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-success">编辑</button>
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-dark">删除</button>

                </div>
            </div>
        </div>
    </div>


    <div class="card">
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col-2">
                    <div class="col text-center">
                        <div class="row-5">
                            <img src="./logo.png" class="img-thumbnail custom-img" alt="这里是头像">
                        </div>
                        <div class="row-5 num">
                            3
                        </div>
                </div>
                    
                </div>
                <div class="col-5">
                    <div class="col">
                        <div class="row-5">bot名称</div>
                        <div class="row-5">bot描述</div>
                        <div class="row-5">bot积分: 1000分</div>
                    </div>
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-success">编辑</button>
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-dark">删除</button>

                </div>
            </div>
        </div>
    </div>

   
        
</template>
    
<script>
    export default {
        name:"BotList",
    }
</script>
      
<style scoped>
 .custom-img{
    width: 60%; /* 相对于父元素的宽度 */
    height: auto; /* 高度自动调整 */
    border-radius: 70%;
    }
.card{
    margin-top: 10px;
}

     
</style>
      
      