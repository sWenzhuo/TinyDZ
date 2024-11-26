<template>

    <div class="col">
            <div class="row-3">
                <div class="text-center">
                        <img src="./logo.png" class="img-thumbnail custom-img" alt="这里是头像">
                </div>
                <div class="text-center">
                    <label for="customFile" class="form-label">修改头像</label>
                </div>
                <div class="text-center">
                    <input type="file" class="form-control custom-file" id="customFile">
                </div>
                
                
            </div>

            <div class="row-5">
                <div class="infocontent">
                    <div class="row align-items-center">
                        <div class="col-3 text-end"><p>用户名</p></div>
                        <div class="col-7">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="请输入用户名">
                        </div>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-3 text-end"><p>邮箱</p></div>
                        <div class="col-7">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="请输入邮箱">
                        </div>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-3 text-end"><p>手机号</p></div>
                        <div class="col-7">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="请输入手机号">
                        </div>
                    </div>


                </div>
                

            </div>
            

            <div class="row-2">

                <div class="text-center">
                    <button>保存</button>
                </div>

            </div>
    </div>
   
        
</template>
    
<script>
    export default {
        name:"UserDetailsModify",
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

    .custom-file {
        width: auto; /* 自动调整宽度 */
        display: inline-block; /* 与按钮对齐 */
    }

    .custom-file {
    width: 150px; /* 与按钮宽度相同 */
    }
     
</style>
      
      