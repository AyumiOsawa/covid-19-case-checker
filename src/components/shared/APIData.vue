<template>
  <Home :countryData="countryData" :countryType="Country" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Home from "../../views/Home.vue";

interface Country {
  [countryName: string]: {
    All?: {
      confirmed: number;
      country: number;
      lat: number;
      long: number;
    };
  };
}

export default defineComponent({
  name: "APIData",
  components: {
    Home,
  },
  data() {
    const countryData: Country | Record<string, never> = {
      countryData: {},
    };
    return countryData;
  },
  methods: {
    async fetchData() {
      const response = await fetch("http://localhost:3000/Netherlands");
      const data = await response.json();
      return data;
    },
  },
  async created() {
    this.countryData = await this.fetchData();
  },
});
</script>
