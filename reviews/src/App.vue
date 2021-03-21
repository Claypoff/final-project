<template>
  <div id="app">
    <div id="menu">
      <h1>Get Reviews!</h1>
      <router-link to="/">
        <img src="/images/logo.png">
      </router-link>
    </div>
    <router-view />

    <div class="footer">
      <a class="footer-item" target="_blank" href="https://github.com/Claypoff/Creative3">Github Project Repository Link</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #F7F7F2;
}

#menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

img {
  height: 200px;
}

h1 {
  color: #00008B;
}

.footer {
  display: flex;
  height: 75px;
  width: 100%;
  background-color: #70bf44;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.footer-item {
  display: flex;
  text-align: center;
  align-self: center;
  align-content: center;
  font-size: 1.4em;
  color: #eeeeee;
}

</style>
