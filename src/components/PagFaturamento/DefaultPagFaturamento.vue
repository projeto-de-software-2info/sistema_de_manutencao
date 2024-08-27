<script setup>
        import DefaultHeader from './titulo/DefaultHeader.vue';
        import DefaultFiltro from './filtro/DefaultFiltro.vue';
        import DefaultFaturamentos from './faturamentos/DefaultFaturamentos.vue';
</script>

<template>
    <main>
        <DefaultHeader />
        <DefaultFiltro /> 
        <DefaultFaturamentos />
    </main>
</template>

<style scoped>
   main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(243, 243, 243, 1);
    }
</style>