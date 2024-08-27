<script setup>
defineProps({
  text: String,
  icon: String,
  link: String
})
</script>
<template>
  <RouterLink class="router-link" :to="link">
    <li><img class="icon" :src="icon" />{{ text }}</li>
  </RouterLink>
</template>
<style scoped>
.router-link {
  text-decoration: none;
}
li {
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none;
  margin: 23px 0px;
  color: #012340;
  font-weight: 650;
  font-size: 16px;
}

.icon {
  width: 20px;
}

.logo {
  width: 150px;
}
</style>
