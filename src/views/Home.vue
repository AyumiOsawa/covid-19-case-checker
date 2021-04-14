<template>
  <div class="home">
    home component here:
    countryData: {{countryData}}
    <Globe />
    <Cards :countryData="countryData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import Globe from "@/components/Globe.vue";
import Cards from "@/components/layout/Cards.vue";
import APIData from "@/components/services/APIData.vue";

console.log('home c data', APIData.countryData);


export default defineComponent({
  name: "Home",
  components: {
    Globe,
    Cards,
  },
  data() {
    return {
      countryData: ref(APIData.countryData),
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
