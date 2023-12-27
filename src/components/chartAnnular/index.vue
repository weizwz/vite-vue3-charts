<script setup lang="ts">
import WChart from '@comp/chart/index.vue'

defineOptions({
  name: 'ChartAnnular'
})

const option = {
  tooltip: {},
  grid: {
    top: '20',
    left: '10',
    right: '10',
    bottom: '20',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['12/01', '12/03', '12/05', '12/07', '12/09', '12/11', '12/13']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '电力',
      type: 'line',
      stack: 'Total',
      smooth: true,
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '煤炭',
      type: 'line',
      stack: 'Total',
      smooth: true,
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
}
</script>

<template>
  <WChart width="100%" height="calc(33.33% - 2rem)" :option="option" />
</template>

<style lang="scss" scoped></style>
