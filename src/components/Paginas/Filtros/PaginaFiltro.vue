<script setup>
import { ref } from "vue";
import { useSearchStore } from "@/stores/produtos";
const searchStore = useSearchStore();
const openFilter = ref(false);
function remover() {
  searchStore.filter = "Todos os filtros";
}
</script>
<template>
  <div class="main">
    <div class="filtros">
      <p>Filtros:</p>
      <ul v-if="searchStore.filter != 'Todos os filtros'">
        {{
          searchStore.filter
        }}
        <button @click="remover()">x</button>
      </ul>
    </div>
    <div class="titulo-filter" @click="openFilter = !openFilter">
      <span>Filtros</span> <img src="@/assets/imagens/polygon.png" />
    </div>
    <div id="filtros" v-if="openFilter">
      <div id="containerFilters">
        <label class="filter" for="allFilters">Todos os filtros</label>
        <input
          type="radio"
          id="allFilters"
          name="filterOpition"
          value="Todos os filtros"
          v-model="searchStore.filter"
        />
        <label class="filter" for="ativos">Ativos</label>
        <input
          type="radio"
          id="ativos"
          name="filterOpition"
          value="ativos"
          v-model="searchStore.filter"
        />
        <label class="filter" for="principais">Principais</label>
        <input
          type="radio"
          id="principais"
          name="filterOpition"
          value="principais"
          v-model="searchStore.filter"
        />
        <label class="filter" for="maisrecentes">Mais recentes</label>
        <input
          type="radio"
          id="maisrecentes"
          name="filterOpition"
          value="maisrecentes"
          v-model="searchStore.filter"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
input {
  appearance: none;
}
ul {
  background-color: rgba(194, 194, 194, 0.116);
  border-radius: 20px;
  margin: 1.9vh 0 1vh 4vw;
}
#filtros {
  z-index: 99999999999999999;
  width: min-content;
  height: min-content;
  padding: 20px;
  position: absolute;
  display: flex;
  justify-content: end;
  text-align: end;
  margin-top: 300px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.75);
  right: 6vw;
}
#containerFilters {
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
}
.titulo-filter {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(56, 92, 125, 1);
  text-decoration: none;
  margin: 0 0 0 0.5vw;
  font-size: 18px;
  font-weight: 600;
  appearance: none;
}
.titulo-filter span {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(56, 92, 125, 1);
  text-decoration: none;
  margin: 0 0 0 0.5vw;
  font-size: 18px;
  font-weight: 600;
  appearance: none;
  padding: 10px;
}
label {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(56, 92, 125, 1);
  text-decoration: none;
  margin: 0 0 0 0.5vw;
  font-size: 18px;
  font-weight: 600;
  appearance: none;
}
.main {
  display: flex;
  align-items: center;
  width: 66vw;
  border-radius: 10px;
  margin: 0 0 0 12vw;
  justify-content: space-between;
}

.filtros {
  display: flex;
}

polygon {
  width: 1vw;
  height: 1vh;
  margin-left: 0.5vw;
}
select {
  color: rgba(56, 92, 125, 1);
  width: 5vw;
  height: 2vh;
  background-color: rgba(243, 243, 243, 1);
  text-decoration: none;
  border: none;
  margin: 0 0 0 0.5vw;
  font-size: 18px;
  font-weight: 600;
}

select option {
  border: none;
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
  display: flex;
  align-items: center;
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

.filtros-scroll {
  color: rgba(56, 92, 125, 1);
  font-size: 2.5vh;
}
</style>
