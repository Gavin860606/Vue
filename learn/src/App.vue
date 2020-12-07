<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"> Home </router-link> | <router-link to="/about"> About </router-link> |
      <router-link to="/Counter"> Counter </router-link>|<router-link to="/infocard">
        Infocard
      </router-link>
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
  padding: 30px;

  a {
    font-weight: bold;
    color: #127be4;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
