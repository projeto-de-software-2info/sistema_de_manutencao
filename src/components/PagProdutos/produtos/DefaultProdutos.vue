<script setup>
import { ref } from "vue";
const edit = ref(false);
import EditarForm from '@/components/Form/editar/EditarForm.vue'
import { useProdutoStore } from "@/stores/produtos";
const produtos = useProdutoStore()
const editar = ref(false)
const idProduto = ref(null)

function opcoes(id) {
  if (edit.value && idProduto.value == id) {
    edit.value = false
    idProduto.value = null
  } else {
    edit.value = true
    idProduto.value = id
  }
}

function editarProduto(produto) {
  produtos.updateProduto(idProduto.value, produto)
  editar.value = false
  produto = ''
}
</script>
<template>
  <main>
    <div class="container">
      <ul>
        <li v-for="produto in produtos.produtos" :key="produto.id">
          <div class="produto-loja">
            <p class="produto">{{ produto.produto }}</p>
            <p class="loja">{{ produto.loja }}</p>
          </div>
          <div class="tipo">
            <p class="valor">{{ produto.tipo }}</p>
          </div>
          <div class="quantidade">
            <p>{{ produto.quantidade }}</p>
          </div>
          <div class="valor">
            <p>{{ produto.valor }}</p>
          </div>
          <div class="botao">
            <Button v-if="edit && idProduto === produto.id">
              <img class="edit-icons" src="@/assets/imagens/read.png" height="15" />
              <img
                class="edit-icons"
                @click="editar = true"
                src="@/assets/imagens/edit.png"
                height="15"
              />

              <img
                class="edit-icons"
                @click="produtos.removeProduto(produto.id)"
                src="@/assets/imagens/delete.png"
                height="15"
              />
              <img
                class="edit-icons close"
                @click="opcoes(produto.id)"
                src="@/assets/imagens/fechar2.png"
                height="12"
              />
            </Button>
            <Button v-else @click="opcoes(produto.id)"><p>. . .</p></Button>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="editar" class="editar">
      <div class="editar-titulo">
        <h1>Editar</h1>
        <span @click="editar = false">X</span>
      </div>
      <EditarForm @editar="editarProduto" />
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
.produto{
   font-weight: 600;
   font-size: 16px;
}
.loja{
    font-size: 14px;
    color: #3F3F3F;
}
.tipo{
     width: 4.5vw;
     justify-content: center;
     align-items: center;
     display: flex;
}
.tipo p{
    font-weight: 500;
    font-size: 14px;
}
.quantidade{
     width: 16.5vw;
     justify-content: center;
     align-items: center;
     display: flex;
}
.quantidade p{
    font-size: 14px;
}
.valor{
    width: 13.5vw;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}
.valor p{
    font-size: 14px;
    margin-left: 40px;
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
    font-size: 16px;
    color: #3F3F3F;
    font-weight: 900;
}
</style>
