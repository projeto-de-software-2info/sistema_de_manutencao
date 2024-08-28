<script setup>
        import HeaderOrcamento from './titulo/HeaderOrcamento.vue';
        import FiltroOrcamento from './filtro/FiltroOrcamento.vue';
        import InfoVisaoCliente from './cliente/InfoVisaoCliente.vue';
</script>

<template>
    <main>
        <HeaderOrcamento />
        <FiltroOrcamento /> 
        <InfoVisaoCliente />
    </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(243, 243, 243, 1);
    margin-left: 10px;
    height: 100vh;
    }
</style>