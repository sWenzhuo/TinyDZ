<template>
    <div class="card">
         <div class="card-body">

            <div class="row">
                <div class="col-7">
                    <div class="friend-list">
                        <div class="friend">
                            <img src="https://via.placeholder.com/50" alt="头像">
                            <span class="friend-name">Alice</span>
                        </div>
                        <div class="friend">
                            <img src="https://via.placeholder.com/50" alt="头像">
                            <span class="friend-name">Bob</span>
                        </div>
                        
                    </div>
                </div>
                
                <div class="col-3">
                    <div class="chat-box">
                        <div class="chat-input">
                            <input type="text" placeholder="输入消息...">
                            <button>发送</button>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
 
 
     
 
    
         
 </template>
     
 <script>
     export default {
         name:"FriendsComponent",
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
  /* 左侧好友列表 */
  .friend-list {
      width: 30%;
      background: #f0f0f0;
      padding: 10px;
      overflow-y: auto;
    }

    .friend {
      display: flex;
      align-items: center;
      padding: 10px;
      cursor: pointer;
      border-bottom: 1px solid #ddd;
      transition: background 0.3s;
    }

    .friend:hover {
      background: #e0e0e0;
    }

    .friend img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .friend-name {
      margin-left: 10px;
      font-size: 16px;
    }

    /* 右侧聊天框 */
    .chat-box {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .chat-header {
      background: #007bff;
      color: white;
      padding: 10px;
      text-align: center;
    }

    .chat-messages {
      flex-grow: 1;
      padding: 10px;
      overflow-y: auto;
      background: #f9f9f9;
    }

    .message-sent {
      text-align: right;
      background: #d4f3d1;
      margin: 5px 0;
      padding: 5px 10px;
      border-radius: 10px;
      display: inline-block;
    }

    .message-received {
      text-align: left;
      background: #e1e8ed;
      margin: 5px 0;
      padding: 5px 10px;
      border-radius: 10px;
      display: inline-block;
    }

    .chat-input {
      display: flex;
      padding: 10px;
      background: #fff;
      border-top: 1px solid #ddd;
    }

    .chat-input input {
      flex-grow: 1;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .chat-input button {
      margin-left: 10px;
      padding: 5px 10px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .chat-input button:hover {
      background: #0056b3;
    }
 
      
 </style>
       
       