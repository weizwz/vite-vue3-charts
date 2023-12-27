<script setup lang="ts">
import WChart from '@comp/chart/index.vue'

defineOptions({
  name: 'ChartLoop'
})

const option = {
  grid: {
    top: '20',
    left: '10',
    right: '10',
    bottom: '20',
    containLabel: true
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 120],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      label: {
        formatter: '{b}\n{c} 户'
      },
      data: [
        { value: 60465, name: '雁塔区' },
        { value: 50587, name: '未央区' },
        { value: 48562, name: '碑林区' },
        { value: 46598, name: '莲湖区' },
        { value: 39879, name: '新城区' },
        { value: 36561, name: '灞桥区' },
        { value: 32356, name: '长安区' }
      ]
    }
  ]
}
</script>

<template>
  <WChart width="100%" height="calc(33.33% - 3rem)" :option="option" />
</template>

<style lang="scss" scoped></style>
