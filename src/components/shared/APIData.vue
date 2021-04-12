<template>
  <Globe :data="data" />
</template>

<script>
import { defineComponent } from 'vue';

import Globe from '../Globe.vue';

export default defineComponent({
  name: 'APIData',
  components: {
    Globe,
  },
  data() {
    return {
      data: {},
    };
  },
  methods: {
    async fetchData() {
      const response = await fetch('http://localhost:3000/data');
      const data = await response.json();
      return data;
    },
  },
  async created() {
    this.data = await this.fetchData();
  },
});
</script>
