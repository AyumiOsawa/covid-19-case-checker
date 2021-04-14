<template>
  <div>
    <Header />
    <APIData />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import APIData from "./components/services/APIData.vue";

// console.log('api', APIData);
// console.log('api 1', APIData)

export default {
  name: "App",
  components: {
    Header,
    Footer,
    APIData,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  width: 100vw;
  position: relative;
}
</style>
