<script setup>
const pessoas = [
  {
    id: 1,
    name: 'Júlia Fuck',
    email: 'juliaifc22@gmail.com',
    data: '1 maio,  2024  até  5 maio,  2024',
    status: 'Finalizado'
  },
  {
    id: 2,
    name: 'Rafaela Barbieri da Cruz',
    email: 'rafaelabarbieric@gmail.com',
    data: '1 maio,  2024  até  5 maio,  2024',
    status: 'Em progresso'
  },
  {
    id: 3,
    name: 'Ana Laura Manfrom Dias',
    email: 'anamanfrondias@gmail.com',
    data: '1 maio,  2024  até  5 maio,  2024',
    status: 'Finalizado'
  },
  {
    id: 4,
    name: 'Isabelli Luísa Rosa',
    email: 'isabelli.ifc@gmail.com',
    data: '1 maio,  2024  até  5 maio,  2024',
    status: 'Em progresso'
  },
  {
    id: 5,
    name: 'Guilherme Schreiber',
    email: 'guilhermeschreiber2007@gmail.com',
    data: '1 maio,  2024  até  5 maio,  2024',
    status: 'Finalizado'
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
            <p>{{ pessoa.data }}</p>
          </div>
          <div class="status">
            <p>{{ pessoa.status }}</p>
          </div>
          <div class="botao">
            <Button><p>. . .</p></Button>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<style scoped>
main {
  display: flex;
  background-color: rgba(243, 243, 243, 1);
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
.name {
  font-weight: 600;
  font-size: 16px;
}
.email {
  font-size: 14px;
  color: #3f3f3f;
}
.data {
  width: 18vw;
  justify-content: center;
  align-items: center;
  display: flex;
}
.data p {
    font-size: 14px;
}
.status {
  width: 15vw;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}
.status p {
font-size: 14px;
  margin-left: 40px;
  font-weight: 600;
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
  font-size: 14px;
  color: #3f3f3f;
  font-weight: 900;
}
</style>
