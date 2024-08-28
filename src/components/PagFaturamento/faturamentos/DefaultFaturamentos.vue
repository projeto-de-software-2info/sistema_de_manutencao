<script setup>
const pessoas = [
    {
        id: 1,
        email: 'juliaifc22@gmail.com',
        tipo: 'Fornecedor',
        data: '1 maio,  2024',
        valor: - 50.00
    },
    {
        id: 2,
        email: 'rafaelabarbieric@gmail.com',
        tipo: 'Cliente',
        data: '1 maio,  2024',
        valor: 50.00
    },
    {
        id: 3,
        email: 'anamanfrondias@gmail.com',
        tipo: 'Fornecedor',
        data: '1 maio,  2024',
        valor:  - 50.00
    },
    {
        id: 4,
        email: 'isabelli.ifc@gmail.com',
        tipo: 'Fornecedor',
        data: '1 maio,  2024',
        valor: - 50.00
    },
    {
        id: 5,
        email: 'guilhermeschreiber@gmail.com',
        tipo: 'Cliente',
        data: '1 maio,  2024',
        valor: 50.00
    }
];
</script>
<template>
    <main>
        <div class="container" id="container-2">
            <ul class="ul-2">
                <li class="margin-fat">
                    <div class="entrada">
                        <div class="margin-status">
                            <p class="text-num">R$ 3 137 904,00</p>
                            <p class="texto-centro" id="cor-entrada">Entrada</p>
                        </div>
                        <div >
                            <img class="margin-img" src="/src/components/PagFaturamento/imagens/download.png" alt="">
                        </div>
                    </div>
                </li>
                <li class="li-2 margin-fat">
                    <div class="saida">
                        <div class="margin-status">
                            <p class="text-num">R$ 3 137 904,00</p>
                            <p class="texto-centro" id="cor-saida">Saída</p>
                        </div>
                        <div>
                            <img class="margin-img" src="/src/components/PagFaturamento/imagens/download-2.png" alt="">
                        </div>
                    </div>
                </li>
                <li class="li-2 margin-fat">
                    <div class="total">
                        <p  class="text-num texto-centro">R$ 38 137 904,00</p>
                        <p  class="texto-centro" id="cor-total">Total</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="container">
            <ul class="ul-1">
                <li v-for="pessoa in pessoas" :key="pessoa.id">
                    <div>
                        <img v-if="pessoa.valor < 0" class="margin-img-2" src="/src/components/PagFaturamento/imagens/download-2.png" alt="">
                        <img v-else class="margin-img-2" src="/src/components/PagFaturamento/imagens/download.png" alt="">
                    </div>
                    <div class="nome-email">
                        <p class="name">{{ pessoa.email }}</p>
                        <p class="email">{{ pessoa.tipo }}</p>
                    </div>
                    <div class="status">
                        <p v-if="pessoa.valor < 0" id="cor-negativo">R$ {{ pessoa.valor.toFixed(2).replace('.',',') }}</p>
                        <p v-else id="cor-positivo">R$ +{{ pessoa.valor.toFixed(2).replace('.',',')}}</p>
                    </div>
                    <div class="data">
                        <p>{{ pessoa.data }}</p>
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
#container-2{
   margin-bottom: 10px;
}
.entrada{
    display: flex;
    flex-direction: row;
    justify-content: start;
}
.saida{
    display: flex;
    flex-direction: row;
    justify-content: start;
}
.ul-1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
}
.ul-2 {
    display: flex;
    flex-direction: row; 
    justify-content: start;
    padding: 0;
    width: 66vw;
}
.li-2{
    margin-left: 2vh;
}
.entrada p{
    color: #076510;
}
.saida p{
    color: #650707;
}
.total p{
    color: #012340;
    display: flex;
    justify-content: center;
}
.texto-centro{
    text-align: center;
    font-size: 20px;
}
li {
    display: flex;;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 10px;
    width: 66vw;
    margin: 1vh 0;
   justify-content: center;
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
#cor-negativo{
    color: #650707;
}
#cor-positivo{
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
.margin-status{
    margin-left: 50px;
}
.text-num{
    font-size: 18px;
}
.margin-img{
    margin-left: 15px;
    margin-top: 15px;
    height: 30px;
}
.margin-img-2{
    margin-left: 40px;
}
.margin-fat{
   height: 80px;
}
#cor-entrada{
    color: #27B435;
    font-size: 18px;
}
#cor-saida{
    color: #B42727;
    font-size: 18px;
}
#cor-total{
    color: #385C7D;
    font-size: 18px;
}
</style>