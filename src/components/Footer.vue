<template>
  <footer class="footer">
    <h1>sitemap</h1>
    <nav class="nav">nav</nav>
  </footer>
</template>

<script lang="ts">
export default ({
  name: 'Footer',
});
</script>

<style lang="scss" scoped>
.footer {
  background: #eee;
  padding: 30px;
  position: sticky;
  h1 {
    font-size: 2rem;
  }
}

/* .nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: plum;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
