<script setup lang="ts">
import { defineProps } from 'vue'

defineOptions({
  name: 'ChartTitle'
})
// 组件传参
const props = defineProps({
  title: {
    type: String, //参数类型
    default: '标题', //默认值
    required: true //是否必须传递
  }
})
</script>

<template>
  <div class="chart-title">
    <i>»</i>
    <span>{{ props.title }}</span>
  </div>
</template>

<style lang="scss" scoped>
.chart-title {
  display: flex;
  align-items: center;
  height: 2rem;
  padding-left: 0.5rem;
  > i {
    color: var(--main-color);
    margin-right: 0.5rem;
  }
  > span {
    flex: 1;
    line-height: 2rem;
    font-size: 1rem;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
