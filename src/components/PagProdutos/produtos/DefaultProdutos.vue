<script setup>
import { ref } from "vue";
const edit = ref(false);
const vendas = [
  {
    id: 1,
    produto: "Capinha Rosa A53",
    loja: "Mobile Tech",
    tipo: "Acessório",
    quantidade: "5 unidades",
    valor: "R$ 25,50",
  },
  {
    id: 2,
    produto: "Capinha Rosa A53",
    loja: "Mobile Tech",
    tipo: "Acessório",
    quantidade: "5 unidades",
    valor: "R$ 25,50",
  },
  {
    id: 3,
    produto: "Capinha Rosa A53",
    loja: "Mobile Tech",
    tipo: "Acessório",
    quantidade: "5 unidades",
    valor: "R$ 25,50",
  },
  {
    id: 4,
    produto: "Capinha Rosa A53",
    loja: "Mobile Tech",
    tipo: "Acessório",
    quantidade: "5 unidades",
    valor: "R$ 25,50",
  },
  {
    id: 5,
    produto: "Capinha Rosa A53",
    loja: "Mobile Tech",
    tipo: "Acessório",
    quantidade: "5 unidades",
    valor: "R$ 25,50",
  },
];
</script>
<template>
  <main>
    <div class="container">
      <ul>
        <li v-for="venda in vendas" :key="venda.id">
          <div class="produto-loja">
            <p class="produto">{{ venda.produto }}</p>
            <p class="loja">{{ venda.loja }}</p>
          </div>
          <div class="tipo">
            <p class="valor">{{ venda.tipo }}</p>
          </div>
          <div class="quantidade">
            <p>{{ venda.quantidade }}</p>
          </div>
          <div class="valor">
            <p>{{ venda.valor }}</p>
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

.produto-loja {
  display: flex;
  flex-direction: column;
  margin: 1vh 3vw;
  width: 25.5vw;
}
.produto {
  font-weight: 600;
  font-size: 2, 2vh;
}
.loja {
  font-size: 1.8vh;
  color: #3f3f3f;
}
.tipo {
  width: 4.5vw;
  justify-content: center;
  align-items: center;
  display: flex;
}
.tipo p {
  font-weight: 500;
  font-size: 1vw;
}
.quantidade {
  width: 16.5vw;
  justify-content: center;
  align-items: center;
  display: flex;
}
.quantidade p {
  font-size: 1vw;
}
.valor {
  width: 13.5vw;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}
.valor p {
  font-size: 1vw;
  margin-left: 40px;
}
.botao {
  width: 16.5vw;
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
}
</style>
