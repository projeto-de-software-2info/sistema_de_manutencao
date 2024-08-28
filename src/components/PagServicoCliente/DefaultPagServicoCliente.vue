<script setup>
        import DefaultHeader from './titulo/DefaultHeader.vue';
        import DefaultFiltro from './filtro/DefaultFiltro.vue';
        import DefaultServico from './servico/DefaultServico.vue';
</script>

<template>
    <main>
        <DefaultHeader titulo="Serviço" />
        <DefaultFiltro /> 
        <DefaultServico />
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