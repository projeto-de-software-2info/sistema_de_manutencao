<script setup>
import { ref } from "vue";
import { useSearchStore } from "@/stores/produtos";
const searchStore = useSearchStore();
const edit = ref(false);
const maisinfo = ref(false);
const pessoas = [
  {
    id: 1,
    name: "Troca de pelicula",
    email: "juliaifc22@gmail.com",
    data: "1 maio,  2024  até  5 maio,  2024",
    status: "Finalizado",
    priority: "maisrecentes",
  },
  {
    id: 2,
    name: "Manutenção de bateria",
    email: "rafaelabarbieric@gmail.com",
    data: "1 maio,  2024  até  5 maio,  2024",
    status: "Em progresso",
    priority: "maisrecentes",
  },
  {
    id: 3,
    name: "Manutenção de tela",
    email: "anamanfrondias@gmail.com",
    data: "1 maio,  2024  até  5 maio,  2024",
    status: "Finalizado",
    priority: "principais",
  },
  {
    id: 4,
    name: "Troca de pelicula",
    email: "isabelli.ifc@gmail.com",
    data: "1 maio,  2024  até  5 maio,  2024",
    status: "Em progresso",
    priority: "principais",
  },
  {
    id: 5,
    name: "Troca de pelicula",
    email: "guilhermeschreiber2007@gmail.com",
    data: "1 maio,  2024  até  5 maio,  2024",
    status: "Finalizado",
    priority: "ativos",
  },
];

function filteredProducts() {
  let productF = [];
  productF = pessoas.filter((productType) => {
    return productType.name.toLowerCase().includes(searchStore.search.toLowerCase());
  });
  productF = productF.filter((selectedType) => {
    if (searchStore.filter != "Todos os filtros") {
      let filteredProduct = selectedType.priority;
      filteredProduct += selectedType.name;
      return filteredProduct.toLowerCase().includes(searchStore.filter.toLowerCase());
    } else return selectedType;
  });
  return productF;
}
</script>
<template>
  <main>
    <div class="container">
      <ul>
        <li v-for="pessoa in filteredProducts()" :key="pessoa.id">
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
        <button  @click="maisinfo=true" class="analisar-servicos">Analisar serviços</button>
      </ul>
    </div>
  </main>
  <div class="maisinfo" v-if="maisinfo">
    <span  @click="maisinfo=false" class="fechar">x</span>
  <div class="container2">
    <select name="filtros" id="filtros">
      <option selected value="filtro">tipo de serviço</option>
      <option value="Ativo">tipo de serviço 1</option>
      <option value="Mais recentes">tipo de serviços 2</option>
    </select>
    <div class="perfil-information-edit">
      <div class="information">
        <span class="information-title">Margens de faturamento:  R$400,00</span>
      </div>
      <div class="information">
        <span class="information-title">Tempo médio para realização:  3 dias</span>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
select {
  color: #2f506e;
  width: 280px;
  height:40px;
  background-color: rgba(243, 243, 243, 1);
  text-decoration: none;
  border: 2px solid #385C7D;
  border-radius: 10px;
  margin: 40px;
  font-size: 15px;
  font-weight: 600;
  text-indent: -10px;
  display: flex;
  text-align: center;
}
.fechar{
  top:0vh;
  margin-left: 360px;
  position: absolute;
  z-index:2;
}
.information {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.information-title, .fechar{
  font-weight: bold;
  color:#2f506e
}
.information input{
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
}
.maisinfo{
  width: 100vw;
  top:20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #EDEDED;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
}
.analisar-servicos{
  border: 1px solid #385C7D;
  background-color: #EDEDED;
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  color: #385C7D;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 5px 20px;
  border-radius: 5px;
  margin-top: 20px;
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
  margin-bottom: 7vh;
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
