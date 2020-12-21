<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Home"> Home</router-link>|
      <router-link to="/Economy"> Economy</router-link>|
      <router-link to="/Service"> Service</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  a {
    font-weight: bold;
    color: #127be4;
    font-size: 24px;
    margin: 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#app {
  background-color: #1b3b49;
}
</style>
