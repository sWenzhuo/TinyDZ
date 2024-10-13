<template>
    <div class="user-detail-page">
      <div class="user-container">
        <div class="card">
          <div class="card-body">
            <!-- 3D角色展示区 -->
            <div class="character-display">
                <p>3D角色展示区</p>
                <!-- 这里可以集成3D渲染库例如Three.js来展示3D角色 -->
            </div>
  
            <!-- 个人信息区域 -->
            <div class="character-info">
                <h2>用户名: 角色名称</h2>
                <p>角色描述: 这是用户选择的角色描述。</p>
                <div class="progress-bar">
                    <div class="progress-bar-fill"></div>
                </div>
                <div class="achievement-badges">
                    <div class="badge" title="成就1"></div>
                    <div class="badge" title="成就2"></div>
                    <div class="badge" title="成就3"></div>
                </div>
            </div>
  
            <!-- 操作按钮区 -->
            <div class="button-container">
                <button @click="changeCharacter">切换角色</button>
                <button @click="editProfile">编辑信息</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <script>
    export default {
      
        name:"UserComponent",
        setup(){
       
          const changeCharacter = () => {
              alert('切换角色功能尚未实现。');
          };
  
          const editProfile = () => {
              alert('编辑信息功能尚未实现。');
          };
  
          return {
              changeCharacter,
              editProfile
          }
        }
    }
  </script>
    
  <style scoped>
  .user-detail-page {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
      background: linear-gradient(to bottom, #3a3f51, #1f1f2e);
      padding: 40px 0;
  }
  .user-container {
      width: 100%;
      max-width: 800px;
  }
  .card {
      background: #2a2f3e;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      overflow: hidden;
  }
  .card-body {
      padding: 20px;
      color: #ffffff;
  }
  .character-display {
      width: 100%;
      height: 300px;
      background: #202b45;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
  }
  .character-info {
      text-align: center;
      margin-bottom: 20px;
  }
  .character-info h2 {
      margin: 0;
      font-size: 1.5em;
  }
  .progress-bar {
      width: 100%;
      max-width: 500px;
      height: 20px;
      background-color: #555;
      border-radius: 5px;
      overflow: hidden;
      margin: 10px auto;
  }
  .progress-bar-fill {
      height: 100%;
      background-color: #4caf50;
      width: 60%;
  }
  .achievement-badges {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 15px;
  }
  .badge {
      width: 40px;
      height: 40px;
      background: #ffa726;
      border-radius: 50%;
  }
  .button-container {
      display: flex;
      gap: 10px;
      margin-top: 20px;
      justify-content: center;
  }
  button {
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      color: white;
      background-color: #607d8b;
      transition: background-color 0.3s;
  }
  button:hover {
      background-color: #78909c;
  }
  </style>
  