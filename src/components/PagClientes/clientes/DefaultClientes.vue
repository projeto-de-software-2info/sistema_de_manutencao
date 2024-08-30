<script setup>
import { ref } from 'vue'
const edit = ref(false)
const pessoas = [
  {
    id: 1,
    name: 'Júlia Fuck',
    email: 'juliaifc22@gmail.com',
    orcamentos: 2,
    vendas: 4,
    servicos: 2,
    data: ' 5 maio,  2024',
    status: 'ativo'
  },
  {
    id: 2,
    name: 'Rafaela Barbieri da Cruz',
    email: 'rafaelabarbieric@gmail.com',
    orcamentos: 2,
    vendas: 4,
    servicos: 2,
    data: ' 5 maio,  2024',
    status: 'ativo'
  },
  {
    id: 3,
    name: 'Ana Laura Manfrom Dias',
    email: 'anamanfrondias@gmail.com',
    orcamentos: 2,
    vendas: 4,
    servicos: 2,
    data: ' 5 maio,  2024',
    status: 'ativo'
  },
  {
    id: 4,
    name: 'Isabelli Luísa Rosa',
    email: 'isabelli.ifc@gmail.com',
    orcamentos: 2,
    vendas: 4,
    servicos: 2,
    data: '5 maio,  2024',
    status: 'ativo'
  },
  {
    id: 5,
    name: 'Guilherme Schreiber',
    email: 'guilhermeschreiber2007@gmail.com',
    orcamentos: 2,
    vendas: 4,
    servicos: 2,
    data: '5 maio,  2024',
    status: 'ativo'
  }
]
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
          <div class="data">
            <p>{{ pessoa.status }}</p>
          </div>
          <div class="dados">
            <div class="orcamento">
              <p>{{ pessoa.orcamentos }}</p>
            </div>
            <div class="venda">
              <p>{{ pessoa.vendas }}</p>
            </div>
            <div class="servico">
              <p>{{ pessoa.servicos }}</p>
            </div>
          </div>

          <div class="data">
            <p>{{ pessoa.data }}</p>
          </div>
          <div class="botao">
            <Button v-if="edit">
            <img class="edit-icons" src="@/assets/imagens/read.png" height="15"/>
            <img class="edit-icons" src="@/assets/imagens/edit.png" height="15"/>
            <img class="edit-icons" src="@/assets/imagens/delete.png" height="15"/>
            <img class="edit-icons close"  @click="edit = false" src="@/assets/imagens/fechar2.png" height="12"/>
            </Button>
            <Button v-else @click="edit = true"><p>. . .</p></Button>
          </div>
        </li>
      </ul>
    </div>
    <div class="buttons">
      <div class="orcamento">Orçamentos</div>
      <div class="venda">Vendas</div>
      <div class="servico">Serviços</div>
    </div>
  </main>
</template>
<style scoped>
.edit-icons{
  height:12px;
  margin:5px;
}
.close{
    height:10px;
  margin-left:18px; 
}
main {
  display: flex;
  background-color: rgba(243, 243, 243, 1);
  margin-left: 6vw;
}

.buttons {
  display: flex;
  gap: 28px;
  width: 66vw;
  margin-left: 15vw;
}

.buttons div {
  font-weight: bold;
  border: 1px solid;
  padding: 0px 8px;
  border-radius: 5px;
  background-color: white;
}
p {
  color: #3f3f3f;
  font-family: 'Poppins', sans-serif;
}
.container {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 16vh;
}
ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
}

li {
    display: flex;;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 10px;
    width: 66vw;
    margin: 1vh 0 0 13.5vw;
    padding: 1vh 3vw 0 0;
    box-shadow: 4px 4px 3.9px 0px rgba(183, 183, 183, 0.25);
}

.dados {
  display: flex;
  gap: 22px;
}

.dados div {
  border: 1px solid;
  padding: 0px 8px;
  border-radius: 25%;
}

.orcamento {
  color: #2f7ec8;
  border-color: #8ec8ff;
}

.orcamento p {
  color: #2f7ec8;
}

.venda {
  color: #27b435;
  border-color: #27b43579;
}

.venda p {
  color: #27b435;
}

.servico {
  color: #e55e23;
  border-color: #e55d2396;
}

.servico p {
  color: #e55e23;
}

.nome-email {
  display: flex;
  flex-direction: column;
  margin: 1vh 4vw;
  width: 25.5vw;
}
.name {
  font-weight: 600;
  font-size: 16px;
}
.email {
  font-size:14px;
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
  width: 13.5vw;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}
.status p {
  font-size: 14px;
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
