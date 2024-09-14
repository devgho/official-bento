<template>
  <div class=" w-full h-full bg-red-400">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import header from '../components/header.vue';
import projectcard from '../components/projectcard.vue';
import footer from '../components/footer.vue';

export default defineComponent({
  components: { header, projectcard, footer },
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
#projects {
  padding: 2rem;
  background: #f4f4f4;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
