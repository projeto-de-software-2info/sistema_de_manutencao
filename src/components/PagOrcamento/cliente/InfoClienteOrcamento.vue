<script setup>
import { ref } from "vue";
import EditarForm from '@/components/Form/editar/EditarForm.vue'
import { useOrcamentoStore } from "@/stores/orcamentos";
const edit = ref(false)
const orcamentos = useOrcamentoStore()
const editar = ref(false)
const idOrcamento = ref(null)

function opcoes(id) {
  if (edit.value && idOrcamento.value == id) {
    edit.value = false
    idOrcamento.value = null
  } else {
    edit.value = true
    idOrcamento.value = id
  }
}

function editarOrcamento(orcamento) {
  orcamentos.updateOrcamento(idOrcamento.value, orcamento)
  editar.value = false
  orcamento = ''
}
</script>
<template>
  <main>
    <div class="container">
      <ul>
        <li v-for="orcamento in orcamentos.orcamentos" :key="orcamento.id">
          <div class="nome-email">
            <p class="name">{{ orcamento.name }}</p>
            <p class="email">{{ orcamento.email }}</p>
          </div>
          <div class="cellphone">
            <p>{{ orcamento.cellphone }}</p>
          </div>
          <div class="data">
            <p>{{ orcamento.data }}</p>
          </div>
          <div class="status">
            <p>{{ orcamento.status }}</p>
          </div>
          <div class="botao">
            <Button v-if="edit && idOrcamento === orcamento.id">
              <img class="edit-icons" src="@/assets/imagens/read.png" height="15" />
              <img
                class="edit-icons"
                @click="editar = true"
                src="@/assets/imagens/edit.png"
                height="15"
              />

              <img
                class="edit-icons"
                @click="orcamentos.removeOrcamento(orcamento.id)"
                src="@/assets/imagens/delete.png"
                height="15"
              />
              <img
                class="edit-icons close"
                @click="opcoes(orcamento.id)"
                src="@/assets/imagens/fechar2.png"
                height="12"
              />
            </Button>
            <Button v-else @click="opcoes(orcamento.id)"><p>. . .</p></Button>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="editar" class="editar">
      <div class="editar-titulo">
        <h1>Editar</h1>
        <span @click="editar = false">X</span>
      </div>
      <EditarForm @editar="editarOrcamento" />
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

.editar {
  position: absolute;
  width: 15vw;
  background-color: #385c7d;
  padding: 30px;
  top: 35vh;
  margin-left: 12vw;
  border-radius: 15px;
}

.editar-titulo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: white;
  font-weight: 800;
  margin-bottom: 10px;
}

.editar span {
  cursor: pointer;
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
