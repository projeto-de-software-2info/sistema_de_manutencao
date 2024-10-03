<script setup>
defineProps({
    number:String,
    type:String
})
</script>
<template>
          <div class="container">
            <span class="number">{{ number }}</span><span class="tipo">{{ type }}</span>
          </div>
  </template>
  <style scoped>
  .container {
    width: 12vw;
    height: 150px;
    margin-bottom: 30px;
    background-color: #385C7D;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  
  .number {
    font-weight: bold;
    color: white;
    font-size: 40px;
  }

  .tipo {
    font-weight: bold;
    color: white;
    font-size: 20px;
  }
  
  </style>
  