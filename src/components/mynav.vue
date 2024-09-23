<template>
  <div class=" flex w-full items-center justify-between px-[3.5vw] pt-8">
    <div class="w-24">
      <img class="" src="../assets/logo_trans.png" alt="">
    </div>
    <nav class=" flex space-x-4">
      <el-radio-group v-model="tabPosition" fill="white" size="large" >
        <el-radio-button value="top">主页</el-radio-button>
        <el-radio-button value="right">关于</el-radio-button>
        <el-radio-button value="bottom">作品</el-radio-button>
        <el-radio-button value="left">价格</el-radio-button>
      </el-radio-group>
      <el-button type="" size="" @click=""></el-button>
    </nav>
    <div class=" cursor-pointer">
      联系我们
    </div>
  </div>

</template>
<script>
import { ElLink } from 'element-plus';
import { defineComponent, ref } from 'vue';

export default defineComponent({
 setup(){
  const tabPosition = ref('top')
  return {tabPosition}
 }
});
</script>
<style scoped></style>