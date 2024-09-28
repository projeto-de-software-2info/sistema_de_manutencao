<template>
  <div class="circulo-fechar">
    <img class="icon" src="@/assets/imagens/fechar.png" width="15px" />
  </div>
</template>
<style scoped>
.circulo-fechar {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #ececec;
  position: absolute;
  margin: 50px calc(20vw - 65px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.circulo-fechar img {
  width: 15px;
}
.icon {
  width: 20px;
}
</style>
