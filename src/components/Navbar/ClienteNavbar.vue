<script setup>
import ClienteLinks from './links/ClienteLinks.vue'
import NavbarLogo from './logo/NavbarLogo.vue'
import NavbarFechar from './fechar/NavbarFechar.vue'
</script>
<template>
  <nav>
    <NavbarLogo />
    <ClienteLinks />
    <NavbarFechar />
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: white;
  width: 20vw;
  height: 100vh;
  position: fixed;
  padding: 50px;
}
</style>
