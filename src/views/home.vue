<template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      projects: [
        {
          image: 'path/to/image1.jpg',
          title: 'Project 1',
          description: 'Description of Project 1'
        },
        {
          image: 'path/to/image2.jpg',
          title: 'Project 2',
          description: 'Description of Project 2'
        }
        // Add more projects as needed
      ]
    };
  }
});
</script>

<style scoped>
</style>
