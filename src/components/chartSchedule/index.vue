<script setup lang="ts">
import { reactive } from 'vue'

defineOptions({
  name: 'ChartSchedule'
})

const config = reactive({
  data: [
    {
      name: '雁塔区',
      value: 167
    },
    {
      name: '未央区',
      value: 133
    },
    {
      name: '碑林区',
      value: 120
    },
    {
      name: '莲湖区',
      value: 98
    },
    {
      name: '新城区',
      value: 86
    },
    {
      name: '灞桥区',
      value: 72
    },
    {
      name: '长安区',
      value: 54
    }
  ],
  unit: '台'
})
</script>

<template>
  <dv-capsule-chart :config="config" style="width: 100%; height: calc(33.33% - 2rem)" />
</template>

<style lang="scss" scoped></style>
