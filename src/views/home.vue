<template>
  <Bento :bentoCells="bentoCells" class="!h-[610px] overflow-y-auto overflow-x-hidden p-[10px] box-content" :size="140"
    :disabled="false" :gap="10" :maximum-cells="4" @drag-end="(e) => console.log(e)"
    @drag-start="(e) => console.log(e)">
    <BentoItem v-for="item in bentoCells" :key="item.id" :id="item.id" :x="item.x" :y="item.y" :width="item.width"
      :height="item.height">
      <Cell :url="'./' + item.id + '.svg'" :bg="'#fff'" />
    </BentoItem>
  </Bento>
</template>

<script>
import { Bento, BentoItem } from 'v3-bento';

export default {
  setup() {
    const bentoCells = [
      { id: '1', x: 0, y: 0, width: 2, height: 2, index: 0 },
      { id: '2', x: 2, y: 0, width: 2, height: 1, index: 1 },
      { id: '3', x: 2, y: 1, width: 1, height: 1, index: 2 },
      { id: '4', x: 3, y: 1, width: 1, height: 2, index: 3 },
      { id: '5', x: 0, y: 2, width: 2, height: 1, index: 4 },
      { id: '6', x: 0, y: 2, width: 1, height: 1, index: 5 },
    ];

    return {
      bentoCells
    };
  }
};
</script>

<style scoped>
/* 页面特定的样式 */
</style>