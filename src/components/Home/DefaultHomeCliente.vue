<script setup>

</script>

<template>
    <main>
        <div class="main">
            <div class="title">
                <h1 style="color: #012340;">O seu dispositivo</h1>
                <h1 style="color: #385C7D;">merece sempre</h1>
                <h1 style="color: #012340;">o melhor</h1>
                <hr style="width: 9vw; margin-left: 2vw; border-color: #012340;">
                <div class="slogan">
                    <h2 style="color: #012340;">Cuide do seu celular com a nossa</h2>
                    <h2 style="color: #012340;">manutenção rápida e eficiente</h2>
                </div>
                <div class="infoFoto">
                    <div class="info-1"> 
                        <h1 class="margin-num" style="color: #385C7D">13</h1>
                        <h2 class="margin-text" style="color: #385C7D">fornecedores</h2>
                    </div>
                    <div class="info">
                        <h1 class="margin-num" style="color: #385C7D">48</h1>
                        <h2 class="margin-text" style="color: #385C7D">produtos</h2>
                    </div>
                    <div class="info">
                        <h1 class="margin-num" style="color: #385C7D">+100</h1>
                        <h2 class="margin-text" style="color: #385C7D">serviços realizados</h2>
                    </div>
                </div>
            </div>

            <div>
              <img class="imagem" src="./imagem/imagemCelular.png" alt="">
            </div>

            <div class="blocos">
            <div class="bloc">
                <h1>aa</h1>
            </div>
            <div>
                <h1>aa</h1>
            </div>
            <div>
                <h1>aa</h1>
            </div>
        </div>
        </div>

        
    </main>
</template>

<style scoped>

main{
    background-color: #F3F3F3;
}    
.title{
    padding-top: 3vw;
    line-height: 3.5vw;
    
}
.title h1{
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 3vw;
}

.slogan{
    margin-top: 1vw;
    line-height: 2vw;
    
}

.slogan h2{
    font-size: 1.5vw;
    font-weight: 700;
    
}

.infoFoto{
    display: flex;
    flex-direction: row; 
    justify-content: start;
    padding: 0;
    width: 45vw;
    margin-top: 2vw;
}

.info{
    margin-left: 100px;
}

.main{
    margin-left: 25vw;
    display: flex;
    flex-direction: row; 
    justify-content: start;
  
}

.imagem{
    width: 20vw;
    margin-top: 3vw;
}

.margin-num{
    text-align: center;
}

.margin-text{
    font-weight: 700;
    line-height: 1vw;
}

.blocos{
    display: flex;
    flex-direction: row; 
    justify-content: start;
}

</style>