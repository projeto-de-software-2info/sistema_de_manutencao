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
        name: 'Rafaela Barbieri da Cruz',
        email: 'rafaelabarbieric@gmail.com',
        cellphone: 'Motorola',
        data:  '5 maio,  2024',
        status: 'Em avaliação'
    },
    {
        id: 3,
        name: 'Ana Laura Manfrom Dias',
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
    width: 88vw;
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
   font-weight: 700;
   font-size: 2.25vh;
}
.email{
    font-size: 1.8vh;
    color: #3F3F3F;
}
.data{
     width: 16.5vw;
     justify-content: center;
     align-items: center;
     display: flex;
     margin-left: 2vw;
}
.data p{
    font-size: 1vw;
}
.status{
    width: 13.5vw;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    margin-left: 4vw;
}
.status p{
    font-size: 1vw;
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
    color: #3F3F3F;
    font-weight: 900;
}
.cellphone{
    margin-left: 2vw;
    width: 13vw;
}
.cellphone p{
    font-weight: 500;
    font-size: 1vw;
}
</style>