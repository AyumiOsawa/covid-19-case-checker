<template>
  <div class="home">
    home component here
    <Globe />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Globe from '@/components/Globe.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Globe,
  },
});
</script>
