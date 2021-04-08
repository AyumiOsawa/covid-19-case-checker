<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/compare">Compare</router-link> |
      <router-link to="/random">Random</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
export default ({
  name: 'Header',
});
</script>

<style lang="scss" scoped>
.header {
  padding: 30px;
  position: sticky;
}

.nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
