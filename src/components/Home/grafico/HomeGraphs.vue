<script setup>
defineProps({
    image:Image
})
</script>
<template>
    <img class="grafico" :src="image" />
</template>
<style scoped>
.grafico {
  width: 28vw;
}
.grafico {
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
</style>
