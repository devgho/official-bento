<template>
  <footer>
    <p>&copy; 2024 Nev Flynn. All rights reserved.</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style scoped>
footer {
  text-align: center;
  padding: 1rem;
  background: #333;
  color: #fff;
}
</style>
