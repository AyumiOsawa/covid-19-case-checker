<template>
  <div class="home">
    home component here:
    <Globe />
    <Cards />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

import Globe from "@/components/Globe.vue";
import Cards from "@/components/layout/Cards.vue";
// import APIData from "@/components/services/APIData.vue";

// console.log('home, prop c data', countryData);

export default defineComponent({
  name: "Home",
  components: {
    Globe,
    Cards,
  },
  props: ["countryData"],
  data() {
    return {
      // countryData: ref(APIData.countryData),
    };
  },
  method: {
    loadData() {
      // const data = ref(APIData.countryData);
      // return data;
    },
  },
});
</script>

<style lang="scss" scoped>
.home {
  height: 300vh;
  min-height: 120vh;
}
</style>
