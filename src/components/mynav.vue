<template>
  <div class=" flex w-full justify-around pt-4">
    <div>
      白马小程序
    </div>
    <nav class=" flex space-x-4">
      <div>主页</div>
      <div>关于</div>
      <div>项目</div>
      <div>价格</div>
    </nav>
    <div>
      联系我们
    </div>
  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MyNav',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
})
</script>
<style scoped></style>