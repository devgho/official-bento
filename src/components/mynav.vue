<template>
  <div class=" flex w-full justify-around pt-12">
    <div>
      白马小程序
    </div>
    <nav class=" flex space-x-4">
      <el-radio-group v-model="tabPosition" fill="green" size="large" >
        <el-radio-button value="top">主页</el-radio-button>
        <el-radio-button value="right">关于</el-radio-button>
        <el-radio-button value="bottom">作品</el-radio-button>
        <el-radio-button value="left">价格</el-radio-button>
      </el-radio-group>
      
      <el-badge>
      </el-badge>
    </nav>
    <div>
      联系我们
    </div>
  </div>

</template>
<script type="ts">
import { ElRadioGroup } from 'element-plus';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MyNav',
  data() {
    return {
      tabPosition: 'top'
    }
  }
})
</script>
<style scoped></style>