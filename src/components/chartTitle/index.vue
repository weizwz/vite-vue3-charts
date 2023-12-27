<script setup lang="ts">
import { defineProps } from 'vue'

defineOptions({
  name: 'ChartTitle'
})
// 组件传参
const props = defineProps({
  title: {
    type: String, //参数类型
    default: '模块标题', //默认值
    required: true //是否必须传递
  }
})
</script>

<template>
  <div class="chart-title">{{ props.title }}</div>
</template>

<style lang="scss" scoped>
.chart-title {
  font-size: 1rem;
  height: 40px;
  line-height: 40px;
}
</style>
