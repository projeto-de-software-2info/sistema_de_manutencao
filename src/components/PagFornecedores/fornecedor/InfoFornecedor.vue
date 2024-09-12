<script setup>
import { ref } from "vue";
import { useFornecedoresStore } from "@/stores/fornecedores";
import EditarForm from '@/components/Form/editar/EditarForm.vue'
const edit = ref(false)
const fornecedores = useFornecedoresStore()
const editar = ref(false)
const idFornecedor = ref(null)

function opcoes(id) {
  if (edit.value && idFornecedor.value == id) {
    edit.value = false
    idFornecedor.value = null
  } else {
    edit.value = true
    idFornecedor.value = id
  }
}

function editarFornecedor(fornecedor) {
  fornecedores.updateFornecedor(idFornecedor.value, fornecedor)
  editar.value = false
  fornecedor = ''
}

</script>
<template>
  <main>
    <div class="container">
      <ul>
        <li v-for="fornecedor in fornecedores.fornecedores" :key="fornecedor.id">
          <div class="nome-email">
            <p class="name">{{ fornecedor.name }}</p>
            <p class="email">{{ fornecedor.email }}</p>
          </div>
          <div class="cnpj">
            <p>{{ fornecedor.CNPJ }}</p>
          </div>
          <div class="cep">
            <p>{{ fornecedor.telefone }}</p>
          </div>
          <div class="produtos">
            <p>{{ fornecedor.produtos }}</p>
          </div>
          <div class="botao">
            <Button v-if="edit && idFornecedor === fornecedor.id">
              <img class="edit-icons" src="@/assets/imagens/read.png" height="15" />
              <img
                class="edit-icons"
                @click="editar = true"
                src="@/assets/imagens/edit.png"
                height="15"
              />

              <img
                class="edit-icons"
                @click="fornecedores.removeFornecedor(fornecedor.id)"
                src="@/assets/imagens/delete.png"
                height="15"
              />
              <img
                class="edit-icons close"
                @click="opcoes(fornecedor.id)"
                src="@/assets/imagens/fechar2.png"
                height="12"
              />
            </Button>
            <Button v-else @click="opcoes(fornecedor.id)"><p>. . .</p></Button>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="editar" class="editar">
      <div class="editar-titulo">
        <h1>Editar</h1>
        <span @click="editar = false">X</span>
      </div>
      <EditarForm @editar="editarFornecedor" />
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


p {

    color: #3F3F3F;
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
    width: 26vw;
}
.name{
   font-weight: 600;
   font-size: 16px;
}
.email{
    font-size: 14px;
    color: #3F3F3F;
}
.cep{
     width: 16.5vw;
     justify-content: center;
     align-items: center;
     display: flex;
     margin-left: 2vw;
}
.cep p{
    font-size: 14px;
}
.produtos{
    width: 13.5vw;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    margin-left: 4vw;
}
.produtos p{
    font-size: 14px;
    font-weight: 550;
}
.botao{
    width: 16.5vw;
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
  font-size: 2vh;
  color: #3f3f3f;
  font-weight: 900;
}
.cnpj {
  margin-left: 2vw;
  width: 10vw;
}
.cnpj p {
  font-weight: 400;
  font-size: 1vw;
  width: 13vw;
}
</style>
