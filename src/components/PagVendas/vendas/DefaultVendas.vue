<script setup>
const vendas = [
    {
        id: 1,
        name: 'Júlia Fuck',
        email: 'juliaifc22@gmail.com',
        valor: 'R$ 50,00',
        data: '1 maio,  2024',
        status: 'Entregue'
    },
    {
        id: 2,
        name: 'Rafaela Barbieri da Cruz',
        email: 'rafaelabarbieric@gmail.com',
        valor: 'R$ 50,00',
        data: '1 maio,  2024',
        status: 'Entregue'
    },
    {
        id: 3,
        name: 'Ana Laura Manfrom Dias',
        email: 'anamanfrondias@gmail.com',
        valor: 'R$ 50,00',
        data: '1 maio,  2024',
        status: 'Entregue'
    },
    {
        id: 4,
        name: 'Isabelli Luísa Rosa',
        email: 'isabelli.ifc@gmail.com',
        valor: 'R$ 50,00',
        data: '1 maio,  2024',
        status: 'Entregue'
    },
    {
        id: 5,
        name: 'Guilherme Schreiber',
        email: 'guilhermeschreiber2007@gmail.com',
        valor: 'R$ 50,00',
        data: '1 maio,  2024',
        status: 'Entregue'
    }
];
</script>
<template>
    <main>
        <div class="container">

            <ul>
                <li v-for="venda in vendas" :key="venda.id">
                    <div class="nome-email">
                        <p class="name">{{ venda.name }}</p>
                        <p class="email">{{ venda.email }}</p>
                    </div>
                    <div class="valor">
                        <p class="valor">{{ venda.valor }}</p>
                    </div>
                    <div class="data">
                        <p>{{ venda.data }}</p>
                    </div>
                    <div class="status">
                        <p id="colorStatus">{{ venda.status }}</p>
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
    display: flex;;
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
   font-size: 2,2vh;
}
.email{
    font-size: 1.8vh;
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
#colorStatus{
    color: #076510;
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