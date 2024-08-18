<script setup>
import LoginForm from './form/LoginForm.vue'
import LoginLogo from './logo/LoginLogo.vue'
</script>
<template>
  <main>
    <section class="login-logo">
      <LoginLogo />
    </section>
    <section class="login-form">
      <div>
        <h1>Login</h1>
        <div class="form">
          <LoginForm />
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
* {
  font-weight: bold;
  color: #012340;
}

main {
  display: flex;
  width: 100vw;
  height: 100vh;
}

main section {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  background-color: #012340;
}

.login-logo {
  background-color: white;
}

h1 {
  color: white;
  font-size: 60px;
  text-align: center;
  margin-bottom: 55px;
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
  box-shadow: 2px 2px 10px #707070;
}
</style>
