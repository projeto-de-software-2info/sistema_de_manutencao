<script setup>
import { ref } from "vue";
const edit = ref(false);
const pessoas = [
  {
    id: 1,
    name: "Júlia Fuck",
    email: "juliaifc22@gmail.com",
    cellphone: "Iphone",
    data: "5 maio,  2024",
    status: "Aprovado",
  },
  {
    id: 2,
    name: "Rafaela Barbieri",
    email: "rafaelabarbieric@gmail.com",
    cellphone: "Motorola",
    data: "5 maio,  2024",
    status: "Em avaliação",
  },
  {
    id: 3,
    name: "Ana Laura Dias",
    email: "anamanfrondias@gmail.com",
    cellphone: "Iphone",
    data: "5 maio,  2024",
    status: "Aprovado",
  },
  {
    id: 4,
    name: "Isabelli Luísa Rosa",
    email: "isabelli.ifc@gmail.com",
    cellphone: "Samsung",
    data: "5 maio,  2024",
    status: "Em avaliação",
  },
  {
    id: 5,
    name: "Guilherme Schreiber",
    email: "guilhermeschreiber@gmail.com",
    cellphone: "Xiaomi",
    data: "5 maio,  2024",
    status: "Reprovado",
  },
];
</script>
<template>
  <main>
    <div class="container">
      <ul>
        <li v-for="pessoa in pessoas" :key="pessoa.id">
          <div class="nome-email">
            <p class="name">{{ pessoa.name }}</p>
            <p class="email">{{ pessoa.email }}</p>
          </div>
          <div class="cellphone">
            <p>{{ pessoa.cellphone }}</p>
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
</template>
<style scoped>
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
    margin: 1vh 4vw;
    width: 25.5vw;
}
.name{
   font-weight: 600;
   font-size: 16px;
}
.email{
    font-size: 14px;
    color: #3F3F3F;
}
.valor{
     width: 4.5vw;
     justify-content: center;
     align-items: center;
     display: flex;
}
.data{
     width: 16.5vw;
     justify-content: center;
     align-items: center;
     display: flex;
}
.data p{
    font-size: 14px;
}
.status{
    width: 13.5vw;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}
.status p{
    font-size: 14px;
    margin-left: 40px;
}
#colorStatus{
    color: #076510;
}
.botao{
    width: 12vw;
    justify-content: center;
    align-items: center;
    display: flex;
}
button{
    border: none;
    background-color: rgba(255, 255, 255, 0.75);
}
button p {
    margin-left: 5vw;
    font-size: 14px;
    color: #3F3F3F;
    font-weight: 700;
}
.cellphone {
  margin-left: 2vw;
  width: 8vw;
}

.cellphone p{
    font-weight: 400;
    font-size: 14px;
    width: 13vw;
}
</style>
