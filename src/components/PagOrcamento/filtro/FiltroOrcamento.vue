<script setup>
import { ref } from 'vue';
const filtros = ref(['Ativos', 'Mais recentes']);
function remover(index) {
    filtros.value.splice(index, 1)
}
</script>
<template>
    <div class="main">
        <div class="filtros">
            <p>Filtros:</p>
            <ul>
                <li v-for="(filtro, index) in filtros" :key="index">
                    {{ filtro }} <button @click="remover(index)">x</button>
                </li>
            </ul>
        </div>
        <div class="listaFiltros">
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.main {
    display: flex;
    align-items: center;
    width: 66vw;
    border-radius: 10px;
    justify-content: space-between;
    margin-left: 6vw;
}

.filtros {
    display: flex;
}
.listaFiltros {
    display: flex;
    align-items: center;
}
polygon{
    width: 1vw;
    height: 1vh;
    margin-left: 0.5vw;
}
select{
    color: rgba(56, 92, 125, 1);
    width: 1vw;
    height: 2vh;
    background-color: rgba(243, 243, 243, 1);
    text-decoration: none;
    border: none;
    border-radius: 10px;
    margin: 0 0 0 0.5vw;

}
p {
    font-size: 2.5vh;
    color: rgba(56, 92, 125, 1);
    font-family: "Poppins", sans-serif;
    margin: 1.9vh 0 1vh 4vw;
}

ul {
    display: flex;
    margin-bottom: 1vh;
}

li {
    font-size: 2vh;
    color: rgba(56, 92, 125, 1);
    font-family: "Poppins", sans-serif;
    margin-left: 1.8vw;
    margin-top: 1.9vh;
    background-color: rgba(255, 255, 255, 0.75);
    list-style: none;
    padding: 0.5px 10px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 4px 4px 3.9px 0px rgba(183, 183, 183, 0.25);
}

button {
    font-size: 1.8vh;
    color: rgba(56, 92, 125, 1);
    font-family: "Poppins", sans-serif;
    background-color: transparent;
    border: none;
    width: 2.6vh;
    margin-left: 1vw;
    border-radius: 100%;

}

button:hover {
    cursor: pointer;
    background-color: rgba(200, 200, 200, 0.75);
}
</style>