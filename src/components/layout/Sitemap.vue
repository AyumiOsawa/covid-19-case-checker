<template>
  <h1 class="sitemap">sitemap</h1>
  <nav>
    <ul>
      <li
        v-for="route, index in routes"
        v-bind:key="index"
      >
        <a v-bind:href="[route.path]">
          {{ route.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sitemap',
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.5rem;
}
ul {
  list-style: none;
  margin: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  li {
    a {
      text-decoration-line: none;
    }
    ::before {
      content: "\200B"; // accessibility in Safari
    }
  }
}
</style>
