<script setup>
import DefaultHeader from '../Paginas/header/DefaultHeader.vue'
import DefaultClientes from './clientes/DefaultClientes.vue'
import FiltroCliente from './filtros/filtroCliente.vue'
</script>
<template>
  <main>
   <DefaultHeader titulo="Clientes"/>
    <FiltroCliente />
    <DefaultClientes />
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(243, 243, 243, 1);
}
</style>
