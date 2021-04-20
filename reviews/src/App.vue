<template>
  <div id="app">
    <div id="menu">
      <h1>Best Reviews!</h1>
      <div id="side">
        <router-link to="/profile"><i class="fas fa-user fa-3x" style="display:flex;flex-direction: column;"></i>Profile</router-link>
      </div>
      <router-link to="/">
        <img src="/images/logo.png">
      </router-link>

    </div>

    <router-view />

    <div class="footer">
      <a class="footer-item" target="_blank" href="https://github.com/Claypoff/final-project">Github Project Repository Link</a>
      <br>
      <div>Hours spent on this project: 6.5</div>

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
  created() {
    if(this.$router.path !== "/") {
      this.$router.replace("/")
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

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  margin-right: 15%;
}

img {
  height: 200px;
}

h1 {
  color: #00008B;
}

.footer {
  display: flex;
  flex-direction: column;
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
