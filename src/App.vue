<template>
  <Mynav />
  <RouterView />
</template>

<script>
import { defineComponent } from 'vue';
import "./style.css"
import Mynav from './components/mynav.vue';

export default defineComponent({
  name: 'App',
  components: {
    Mynav
  },
});
</script>

<style></style>
