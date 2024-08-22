<script setup>
defineProps({
    email:String,
    information:String
})
</script>
<template>
          <div class="cliente">
            <img class="icon" src="@/assets/imagens/cliente.png" />
            <span>{{ email }}</span>
            <span>{{ information }}</span>
          </div>
</template>
<style scoped>
.icon {
  width: 20px;
}
.cliente {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #c8c8c84f;
  height: 50px;
  width: 90%;
  border-radius: 10px;
  margin: 11px 0px;
}

.cliente span{
    font-weight: 600;
}
</style>
