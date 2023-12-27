<script setup lang="ts">
import WChart from '@comp/chart/index.vue'

defineOptions({
  name: 'ChartArea'
})

const option = {
  legend: {
    show: true,
    top: 15
  },
  tooltip: {
    show: true
  },
  grid: {
    top: '20',
    left: '10',
    right: '20',
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
      data: [100, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '水力',
      type: 'line',
      stack: 'Total',
      smooth: true,
      areaStyle: {},
      data: [120, 130, 200, 165, 158, 226, 180]
    },
    {
      name: '煤炭',
      type: 'line',
      stack: 'Total',
      smooth: true,
      areaStyle: {},
      data: [128, 182, 191, 134, 190, 130, 110]
    }
  ]
}
</script>

<template>
  <WChart width="100%" height="calc(33.33% - 3rem)" :option="option" />
</template>

<style lang="scss" scoped></style>
