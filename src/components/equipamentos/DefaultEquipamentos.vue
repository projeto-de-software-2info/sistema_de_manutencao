<script setup>
import { ref } from "vue";
import DefaultHeader from '../Paginas/header/DefaultHeader.vue'
import PaginaFiltro from '../Paginas/Filtros/PaginaFiltro.vue'
const edit = ref(false);
const pessoas = [
  {
    id: 1,
    name: 'Júlia Fuck',
    email: 'juliaifc22@gmail.com',
    data: '1 maio,  2024  até  5 maio,  2024',
    status: 'Devolvido'
  },
  {
    id: 2,
    name: 'Rafaela Barbieri da Cruz',
    email: 'rafaelabarbieric@gmail.com',
    data: '1 maio,  2024',
    status: 'Em loja'
  },
  {
    id: 3,
    name: 'Ana Laura Manfrom Dias',
    email: 'anamanfrondias@gmail.com',
    data: '1 maio,  2024  até  5 maio,  2024',
    status: 'Em loja'
  },
  {
    id: 4,
    name: 'Isabelli Luísa Rosa',
    email: 'isabelli.ifc@gmail.com',
    data: '5 maio,  2024',
    status: 'Em progresso'
  },
  {
    id: 5,
    name: 'Guilherme Schreiber',
    email: 'guilhermeschreiber2007@gmail.com',
    data: '1 maio,  2024  até  5 maio,  2024',
    status: 'Em loja'
  }
]
</script>
<template>
    <div class="tudo">
        <DefaultHeader titulo="Equipamentos"/>
         <PaginaFiltro/> 
  <main>
    <div class="container">
      <ul>
        <li v-for="pessoa in pessoas" :key="pessoa.id">
          <div class="nome-email">
            <p class="name">{{ pessoa.name }}</p>
            <p class="email">{{ pessoa.email }}</p>
          </div>
          <div class="data">
            <p>{{ pessoa.data }}</p>
          </div>
          <div class="status">
            <p>{{ pessoa.status }}</p>
          </div>
          <div class="botao">
  

            <Button v-if="edit">
              <img class="edit-icons" src="@/assets/imagens/read.png" height="15" />
              <img class="edit-icons" src="@/assets/imagens/edit.png" height="15" />
              <img class="edit-icons" src="@/assets/imagens/delete.png" height="15" />
              <img
                class="edit-icons close"
                @click="edit = false"
                src="@/assets/imagens/fechar2.png"
                height="12"
              />
            </Button>
            <Button v-else @click="edit = true"><p>. . .</p></Button>
          </div>
        </li>
      </ul>
    </div>
  </main>
</div>
</template>
<style scoped>
.tudo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(243, 243, 243, 1);
    margin-left: 10px;
    height: 100vh;
}
.edit-icons {
  height: 12px;
  margin: 5px;
}
.close {
  height: 10px;
  margin-left: 18px;
}
main {
  display: flex;
  background-color: rgba(243, 243, 243, 1);
}

p {
  color: #3f3f3f;

  font-family: "Poppins", sans-serif;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 16vh;
  margin-left: 20vw;
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  margin: 1vh 0;
}

li {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  width: 66vw;
  margin: 1vh 0;
  padding: 1vh 3vw 0 0;
  box-shadow: 4px 4px 3.9px 0px rgba(183, 183, 183, 0.25);
}

.nome-email {
  display: flex;
  flex-direction: column;
  margin: 1vh 0vw 1vh 4vw;
  width: 20vw;
}
.name {
  font-weight: 600;
  font-size: 16px;
  width: max-content;
}
.email {
  font-size: 14px;
  color: #3f3f3f;
  width: max-content;
}
.data {
  width: 18vw;
  font-size: 2, 2vh;
}
.email {
  font-size: 1.8vh;
  color: #3f3f3f;
}
.data {
  width: 16.5vw;
  justify-content: center;
  align-items: center;
  display: flex;
}
.data p {
  font-size: 14px;
}
.status {
  width: 15vw;
  font-size: 0.82vw;
}
.status {
  width: 13.5vw;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}
.status p {
  font-size: 14px;
  margin-left: 60px;
  font-weight: 600;
}
.botao {
  width: max-content;
  justify-content: center;
  align-items: center;
  display: flex;
}
button {
  border: none;
  background-color: rgba(255, 255, 255, 0.75);
}
button p {
  margin-left: 5vw;
  font-size: 2vh;
  color: #3f3f3f;
  font-weight: 900;
  width: max-content;
}
</style>