<script setup>
const pessoas = [
    {
        id: 1,
        name: 'Júlia Fuck',
        email: 'juliaifc22@gmail.com',
        cellphone: 'Iphone',
        data:  '5 maio,  2024',
        status: 'Aprovado'
    },
    {
        id: 2,
        name: 'Rafaela Barbieri',
        email: 'rafaelabarbieric@gmail.com',
        cellphone: 'Motorola',
        data:  '5 maio,  2024',
        status: 'Em avaliação'
    },
    {
        id: 3,
        name: 'Ana Laura Dias',
        email: 'anamanfrondias@gmail.com',
        cellphone: 'Iphone',
        data:  '5 maio,  2024',
        status: 'Aprovado'
    },
    {
        id: 4,
        name: 'Isabelli Luísa Rosa',
        email: 'isabelli.ifc@gmail.com',
        cellphone: 'Samsung',
        data:  '5 maio,  2024',
        status: 'Em avaliação'
    },
    {
        id: 5,
        name: 'Guilherme Schreiber',
        email: 'guilhermeschreiber@gmail.com',
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
                    <div class="nome-email">
                        <p class="name">{{ pessoa.name }}</p>
                        <p class="email">{{ pessoa.email }}</p>
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
    margin-left: 13vw;
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
   font-size: 2.2vh;
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
    font-size: 2vh;
    color: #3F3F3F;
    font-weight: 700;
}
.cellphone{
    margin-left: 2vw;
    width: 8vw;
}
.cellphone p{
    font-weight: 400;
    font-size: 1vw;
    width: 13vw;
}
</style>