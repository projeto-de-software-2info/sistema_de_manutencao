<script setup>
const pessoas = [
    {
        id: 1,
        name: 'Marcos Autopeças ',
        email: 'marcospecas@gmail.com',
        CNPJ: '12.345.678/0001-00',
        CEP:  '89212202',
        produtos: 'Ver produtos'
    },
    {
        id: 2,
        name: 'Marcos Autopeças ',
        email: 'marcospecas@gmail.com',
        CNPJ: '12.345.678/0001-00',
        CEP:  '89212202',
        produtos: 'Ver produtos'
    },
    {
        id: 3,
        name: 'Marcos Autopeças ',
        email: 'marcospecas@gmail.com',
        CNPJ: '12.345.678/0001-00',
        CEP:  '89212202',
        produtos: 'Ver produtos'
    },
    {
        id: 4,
        name: 'Marcos Autopeças',
        email: 'marcospecas@gmail.com',
        CNPJ: '12.345.678/0001-00',
        CEP:  '89212202',
        produtos: 'Ver produtos'
    },
    {
        id: 5,
        name: 'Marcos Autopeças',
        email: 'marcospecas@gmail.com',
        CNPJ: '12.345.678/0001-00',
        CEP:  '89212202',
        produtos: 'Ver produtos'
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
                    <div class="cnpj">
                        <p>{{ pessoa.CNPJ }}</p>
                    </div>
                    <div class="cep">
                        <p>{{ pessoa.CEP }}</p>
                    </div>
                    <div class="produtos">
                        <p>{{ pessoa.produtos }}</p>
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
    width: 26vw;
}
.name{
   font-weight: 600;
   font-size: 2.25vh;
}
.email{
    font-size: 1.8vh;
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
    font-size: 1.1vw;
}
.produtos{
    width: 13.5vw;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    margin-left: 4vw;
}
.produtos p{
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
.cnpj{
    margin-left: 2vw;
    width: 10vw;
}
.cnpj p{
    font-weight: 400;
    font-size: 1vw;
    width: 13vw;
}
</style>    