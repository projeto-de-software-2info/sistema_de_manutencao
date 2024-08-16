<script setup></script>
<template>
  <main>
    <section class="login-logo">s</section>
    <section class="login-form">
      <div>
        <h1>Login</h1>
        <div class="form">
          <form>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="senha" />
            <small>esqueceu sua senha?</small>
            <div class="input-checkbox"><input type="checkbox" /> administrador</div>
            <button>Entrar</button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
main {
  display: flex;
  width: 100vw;
  height: 100vh;
}

main section {
  width: 50%;
}

.login-form {
  background-color: #012340;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-logo {
  background-color: white;
}

h1 {
  color: white;
  font-size: 60px;
  font-weight: bold;
}

.form {
  width: 324px;
  padding: 68px 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 10px;
}

input {
  border-radius: 8px;
  border: 1px solid #012340;
  height: 35px;
  padding: 10px;
}

input[type='text'] {
  margin-bottom: 18px;
}

input::placeholder {
  color: #012340;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}

input:focus {
  border: 1px solid #012340;
  outline: none;
}

small {
  width: 100%;
  color: #012340;
  font-weight: bold;
  text-align: end;
  display: flex;
  justify-content: end;
  font-size: 10px;
}

.input-checkbox {
  color: #012340;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: bold;
  margin: 10px 0 10px 0;
}

button {
  width: 100%;
  background-color: #012340;
  border-radius: 8px;
  height: 35px;
  color: white;
  box-shadow: none;
  outline: none;
  border: 1px solid #012340;
}
</style>
