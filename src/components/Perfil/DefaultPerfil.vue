<script setup>
import { ref } from "vue";
const nome = ref("nome completo");
const email = ref("emailcompleto@gmail.com");
const cep = ref("89212-202");
const endereco = ref("Rua Areia Branca, 450");
const telefone = ref("(47) 99132-8181");
const editarPerfil = ref(true)
</script>
<template>
  <div class="header">
    <p>Perfil</p>
  </div>
  <main>
    <img class="camera" src="@/assets/imagens/camara.png" />
    <div class="img">
      <img class="perfil-img" src="@/assets/imagens/perfil_foto.jpg" />
    </div>
    <div class="perfil-information">
      <div class="information">
        <span class="information-title">Nome</span>
        <span>{{ nome }}</span>
      </div>
      <div class="information">
        <span class="information-title">Email</span>
        <span>{{ email }}</span>
      </div>
      <div class="information">
        <span class="information-title">Cep</span>
        <span>{{ cep }}</span>
      </div>
      <div class="information">
        <span class="information-title">Endereço</span>
        <span>{{ endereco }}</span>
      </div>
      <div class="information">
        <span class="information-title">Telefone</span>
        <span>{{ telefone }}</span>
      </div>
      <button @click="editarPerfil=true" class="edite">
        <img class="lapis-img" src="@/assets/imagens/lapis.png" width="15px" />edite seu
        perfil
      </button>
    </div>
  </main>
  <div class="editarPerfil" v-if="editarPerfil">
    <div class="container">
      <div class="perfil-information">
        <div class="information">
          <span class="information-title">Nome</span>
          <input v-model="nome"></input>
        </div>
        <div class="information">
          <span class="information-title">Email</span>
          <input v-model="email"></input>
        </div>
        <div class="information">
          <span class="information-title">Cep</span>
          <input v-model="cep"></input>
        </div>
        <div class="information">
          <span class="information-title">Endereço</span>
          <input v-model="endereco"></input>
        </div>
        <div class="information">
          <span class="information-title">Telefone</span>
          <input v-model="telefone"></input>
        </div>
        <button @click="editarPerfil=false" class="edite">
          edite
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container{
  width: 40vw;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
}
.editarPerfil{
  width: 100vw;
  top:30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
}
.lapis-img {
  margin: 5px;
}
.edite {
  border: 1px solid #b6b6b6;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #012340;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: max-content;
  padding: 15px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.edite:hover {
  background-color: rgb(233, 233, 233);
}
.camera {
  width: 20px;
  height: 20px;
  margin-right: -55px;
  margin-top: 15px;
  z-index: 2;
}
main {
  margin: 12vh 6.25vw 0 26vw;
  display: flex;
}
.perfil-information {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 60%;
  margin-left: 3vw;
}
.information {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.information-title {
  font-weight: bold;
}
span {
  color: #3f3f3f;
  font-weight: 500;
}
.img {
  width: 40%;
}
.perfil-img {
  border: 1.5px solid rgb(170, 170, 170);
  border-radius: 10px;
  width: 100%;
  margin-left: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(200, 200, 200, 0.18);
  padding: 3%;
  margin: 7.338vh 6.25vw 0 26vw;
  border-radius: 10px;
  width: 66vw;
  height: 14.4vh;
}

p {
  font-size: 6vh;
  color: rgba(56, 92, 125, 1);
  font-weight: 800;
  padding: 0;
}
</style>
