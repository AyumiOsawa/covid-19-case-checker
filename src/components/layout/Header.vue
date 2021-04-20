<template>
  <header class="header">
    <nav class="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/compare">Compare</router-link></li>
        <li><router-link to="/random">Random</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data() {
    return {
      info: [],
    };
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.header {
  padding: 30px;
  position: sticky;
  top: 0;
  left: 0;
  background: white;
  .nav ul {
    list-style: none;
    margin: 1rem 0;
    display: flex;
    justify-content: space-evenly;
    li {
      ::before {
        content: "\200B"; // accessibility in Safari
      }
      a {
        font-weight: bold;
        text-decoration-line: none;
        color: #2c3e50;
      }
      a.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
