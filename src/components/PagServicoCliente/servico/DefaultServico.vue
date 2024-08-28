<script setup>
const pessoas = [
    {
        id: 1,
        valor: 'R$ 200,00',
        pagamento: 'Valor a ser pago',
        data: '1 maio,  2024  até  5 maio,  2024',
        status: 'Finalizado'
    },
    {
        id: 2,
        valor: 'R$ 200,00',
        pagamento: 'Valor a ser pago',
        data: '1 maio,  2024  até  5 maio,  2024',
        status: 'Em progresso'
    },
    {
        id: 3,
        valor: 'R$ 200,00',
        pagamento: 'Valor a ser pago',
        data: '1 maio,  2024  até  5 maio,  2024',
        status: 'Finalizado'
    },
    {
        id: 4,
        valor: 'R$ 200,00',
        pagamento: 'Valor a ser pago',
        data: '1 maio,  2024  até  5 maio,  2024',
        status: 'Em progresso'
    },
    {
        id: 5,
        valor: 'R$ 200,00',
        pagamento: 'Valor a ser pago',
        data: '1 maio,  2024  até  5 maio,  2024',
        status: 'Finalizado'
    }
];
</script>
<template>
    <main>
        <div class="container">

            <ul>
                <li v-for="pessoa in pessoas" :key="pessoa.id">
                    <div class="valor-pagamento">
                        <p class="valor">{{ pessoa.valor }}</p>
                        <p class="pagamento">{{ pessoa.pagamento }}</p>
                    </div>
                    <div class="data">
                        <p>{{ pessoa.data }}</p>
                    </div>
                    <div class="status">
                        <p>{{ pessoa.status }}</p>
                    </div>
                    <div class="botao">
                        <Button><p>ver mais</p></Button>
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
    margin-left: 40vw;
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

.valor-pagamento {
    display: flex;
    flex-direction: column;
    margin: 1vh 4vw;
    width: 25.5vw;
}
.valor{
   font-weight: 600;
   font-size: 1vw;
}
.pagamento{
    font-size: 1.8vh;
    color: #3F3F3F;
}
.data{
     width: 16.5vw;
     justify-content: center;
     align-items: center;
     display: flex;
}
.data p{
    font-size: 0.82vw;
}
.status{
    width: 13.5vw;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}
.status p{
    font-size: 1vw;
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
    font-size: 2vh;
    color: #3F3F3F;
    font-weight: 600;
}
</style>