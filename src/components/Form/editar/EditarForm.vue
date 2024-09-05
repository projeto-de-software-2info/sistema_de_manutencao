<script setup>
const cliente = { name: '', email: '' }
</script>

<template>
      <form  @submit.prevent="$emit('editar', {...cliente})">
        <input type="text" v-model="cliente.name" placeholder="nome" required/>
        <input type="email" v-model="cliente.email" placeholder="email" required />
        <button type="submit">Editar</button>
      </form>
</template>

<style scoped>
.editar {
  position: absolute;
  width: 15vw;
  background-color: #385c7d;
  padding: 30px;
  top: 35vh;
  margin-left: 12vw;
  border-radius: 15px;
}

.editar form{
  width: 100%;
  display: flex;
  flex-direction: column;
}

.editar input {
  border-radius: 8px;
  border: 1px solid #012340;
  height: 35px;
  padding: 5px;
  text-indent: 25px;
  margin-bottom: 18px;
}


.editar button {
  height: 35px;
  border-radius: 8px;
  background-color: #ffffffbf;
  cursor: pointer;
  color: #385c7d;
  font-size: 16px;
  font-weight: 600;
}


button {
  border: none;
  background-color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
}
</style>