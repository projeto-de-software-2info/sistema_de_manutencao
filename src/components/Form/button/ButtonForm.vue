<script setup>
defineProps(['titulo'])
</script>
<template>
  <button type="submit">{{ titulo }}</button>
</template>
<style scoped>
button {
  width: 100%;
  background-color: #012340;
  border-radius: 8px;
  height: 35px;
  color: white;
  box-shadow: none;
  outline: none;
  border: 1px solid #012340;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #002c52;
}
</style>
