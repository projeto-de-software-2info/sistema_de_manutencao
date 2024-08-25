<script setup>
        import HeaderOrcamento from './titulo/HeaderOrcamento.vue';
        import FiltroOrcamento from './filtro/FiltroOrcamento.vue';
        import InfoClienteOrcamento from './cliente/InfoClienteOrcamento.vue';
</script>

<template>
    <main>
        <HeaderOrcamento />
        <FiltroOrcamento /> 
        <InfoClienteOrcamento />
    </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(243, 243, 243, 1);
    margin-left: 20vw;
    height: 100vh;
    }
</style>