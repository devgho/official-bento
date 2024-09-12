<template>
  <div class="project-card">
    <img :src="image" alt="Project Image" />
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ProjectCard',
  props: {
    image: {
      type: String as PropType<string>,
      required: true
    },
    title: {
      type: String as PropType<string>,
      required: true
    },
    description: {
      type: String as PropType<string>,
      required: true
    }
  }
});
</script>

<style scoped>
.project-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
}

.project-card img {
  width: 100%;
  height: auto;
}
</style>
