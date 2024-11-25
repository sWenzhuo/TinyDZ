<template>
      <div class="container">
        <div class="card"  style="opacity: 0.6;">
          <div class="card-body">
            <slot></slot>
          </div>
        </div>
      </div>
    
  </template>
  
  <script>
  export default {
      name:"ContentBase",
  }
  </script>
  
  <style scoped>
  .container {
    margin-top: 5px;
  }
  </style>
  
  