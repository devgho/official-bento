<template>
  <Mynav />
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import "./style.css"
import Home from './views/home.vue';
import Mynav from './components/mynav.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home,
    Mynav
  },
});
</script>

<style></style>
