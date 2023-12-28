<script setup lang="ts">
import { reactive } from 'vue'

defineOptions({
  name: 'ComponentsName'
})

const config = reactive({
  rowNum: 8,
  color: '#37a2da',
  data: [
    {
      name: '自供自足热力',
      value: 100
    },
    {
      name: '蜂窝炉火热力',
      value: 95
    },
    {
      name: '暖手宝心热力',
      value: 89
    },
    {
      name: '运动创造热力',
      value: 86
    },
    {
      name: '太阳随天热力',
      value: 80
    },
    {
      name: '大衣包身热力',
      value: 78
    },
    {
      name: '电褥躺平热力',
      value: 70
    },
    {
      name: '吃喝不停热力',
      value: 65
    },
    {
      name: '心动空调热力',
      value: 59
    },
    {
      name: '耐冻全抗热力',
      value: 40
    },
    {
      name: '爱吃雪糕热力',
      value: 30
    }
  ],
  unit: '% 满意度'
})
</script>

<template>
  <dv-scroll-ranking-board
    :config="config"
    style="width: calc(100% - 1rem); height: calc(100% - 2rem); margin-left: 0.5rem"
  />
</template>

<style lang="scss" scoped></style>
