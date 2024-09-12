<template>
  <header>
    <h1>Nev Flynn</h1>
    <nav>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #333;
  color: #fff;
}

nav a {
  color: #fff;
  margin-left: 1rem;
  text-decoration: none;
}
</style>
