<script setup>
const pessoas = [
    {
        id: 1,
        valor: 'R$ 200,00',
        info: 'Valor a ser pago',
        cellphone: 'Iphone',
        data:  '5 maio,  2024',
        status: 'Aprovado'
    },
    {
        id: 2,
        valor: 'R$ 250,00',
        info: 'Valor a ser pago',
        cellphone: 'Motorola',
        data:  '5 maio,  2024',
        status: 'Em avaliação'
    },
    {
        id: 3,
        valor: 'R$ 150,00',
        info: 'Valor a ser pago',
        cellphone: 'Iphone',
        data:  '5 maio,  2024',
        status: 'Aprovado'
    },
    {
        id: 4,
        valor: 'R$ 300,00',
        info: 'Valor a ser pago',
        cellphone: 'Samsung',
        data:  '5 maio,  2024',
        status: 'Em avaliação'
    },
    {
        id: 5,
        valor: 'R$ 200,00',
        info: 'Valor a ser pago',
        cellphone: 'Xiaomi',
        data:  '5 maio,  2024',
        status: 'Reprovado'
    }
];
</script>
<template>
    <main>
        <div class="container">

            <ul>
                <li v-for="pessoa in pessoas" :key="pessoa.id">
                    <div class="valor-info">
                        <p class="valor">{{ pessoa.valor }}</p>
                        <p class="info">{{ pessoa.info }}</p>
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
                    <div class="ver-mais">
                        <p>ver mais</p>
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

.valor-info {
    display: flex;
    flex-direction: column;
    margin: 1vh 4vw;
    width: 13vw;
}

.valor{
     width: 6vw;
     justify-content: center;
     align-items: center;
     display: flex;
     font-weight: 600;
     font-size: 16px;
}

.info{
    font-size: 1.7vh;
    color: #3F3F3F;
}

.data{
     width: 16.5vw;
     justify-content: center;
     align-items: center;
     display: flex;
     font-size: 0.9vw;
}

.status{
    width: 13.5vw;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    font-size: 1vw;
    margin-left: 40px;
}

#colorStatus{
    color: #076510;
}
.ver-mais{
    width: 15vw;
    justify-content: center;
    align-items: center;
    display: flex;
}
.ver-mais p {
    margin-left: 5vw;
    font-size: 1.8vh;
    color: #3F3F3F;
    font-weight: 700;
}
.cellphone{
    margin-left: 2vw;
    width: 6vw;
    font-weight: 400;
    font-size: 1vw;
    width: 13vw;
}

</style>