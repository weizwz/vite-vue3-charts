<script setup lang="ts">
import { reactive } from 'vue'

defineOptions({
  name: 'ChartSchedule'
})

const config = reactive({
  data: [
    {
      name: '南阳',
      value: 167
    },
    {
      name: '周口',
      value: 123
    },
    {
      name: '漯河',
      value: 98
    },
    {
      name: '郑州',
      value: 75
    },
    {
      name: '西峡',
      value: 66
    }
  ],
  colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
  unit: '万元'
})
</script>

<template>
  <dv-capsule-chart :config="config" style="width: 100%; height: 15rem" />
</template>

<style lang="scss" scoped></style>
