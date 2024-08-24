<script setup>
        import DefaultHeader from './titulo/DefaultHeader.vue';
        import DefaultFiltro from './filtro/DefaultFiltro.vue';
        import DefaultVendas from './vendas/DefaultVendas.vue';
</script>

<template>
    <main>
        <DefaultHeader />
        <DefaultFiltro /> 
        <DefaultVendas />
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