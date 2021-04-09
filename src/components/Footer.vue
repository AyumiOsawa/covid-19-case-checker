<template>
  <footer class="footer">
    <Sitemap />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sitemap from './Sitemap.vue';

export default defineComponent({
  name: 'Footer',
  components: {
    Sitemap,
  },
});
</script>

<style lang="scss" scoped>
.footer {
  background: #eee;
  padding: 30px;
  width: 100vw;
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
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
