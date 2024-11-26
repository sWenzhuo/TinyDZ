<template>

    <div class="col">
            <div class="row-3">
                <div class="text-center">
                        <img src="./logo.png" class="img-thumbnail custom-img" alt="这里是头像">
                </div>

            </div>
           
            <div class="row-5">
                <div class="infocontent">
                    <div class="row align-items-center">
                        <div class="col-3 text-end"><p>用户名</p></div>
                        <div class="col-7">
                            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
                        </div>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-3 text-end"><p>邮箱</p></div>
                        <div class="col-7">
                            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
                        </div>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-3 text-end"><p>手机号</p></div>
                        <div class="col-7">
                            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
                        </div>
                    </div>


                </div>
                

            </div>
            

            <div class="row-2">

                <div class="text-center">
                    <button>修改</button>
                </div>

            </div>
    </div>
   
        
</template>
    
<script>
    export default {
        name:"UserDetailsInfo",
    }
</script>
      
<style scoped>
    .custom-img{
    width: 20%; /* 相对于父元素的宽度 */
    height: auto; /* 高度自动调整 */
    border-radius: 70%;
    }
    .infocontent{
        width: 50%; /* 根据需要调整宽度 */
        margin: 0 auto; /* 上下外边距为 0，左右外边距自动 */

    }

    p {
    margin-bottom: 0; /* 移除段落的底部间距 */
    line-height: 3; /* 设置与 input 一致的行高 */
    }
    .form-control-plaintext {
        padding-top: 0;
        padding-bottom: 0;
    }
     
</style>
      
      