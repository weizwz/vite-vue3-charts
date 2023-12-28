<script setup lang="ts">
import { reactive } from 'vue'
import WChart from '@comp/chart/index.vue'
import { get_date } from '@/utils/date'

defineOptions({
  name: 'ChartBar'
})

const axis = get_date(30)
const area = ['雁塔区', '未央区', '碑林区', '莲湖区', '新城区', '灞桥区', '长安区']
const maxT = 10
const minT = -4
let series = []

for (const item of area) {
  let _series = {
    name: item,
    type: 'bar',
    barMinHeight: 1,
    stack: 'a',
    barWidth: 20,
    data: reactive([] as any[])
  }
  for (let i = 0; i < axis.length; i++) {
    const last = i === 0 ? 0 : parseFloat(_series.data[i - 1])
    const base = Math.random() * (maxT - minT) + minT
    const cha = base - last > 1 ? 0.2 : base - last < 0 ? -0.5 : base - last
    const t: number = parseFloat((last + cha).toFixed(2))
    _series.data.push(t)
  }
  series.push(_series)
}

const option = {
  legend: {
    show: true,
    top: 10
  },
  tooltip: {
    show: true
  },
  grid: {
    top: '40',
    left: '10',
    right: '20',
    bottom: '20',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    data: axis
  },
  yAxis: {
    name: '温度 ℃',
    type: 'value'
  },
  series: series
}
</script>

<template>
  <WChart width="100%" height="calc(100% - 1.5rem)" :option="option" />
</template>

<style lang="scss" scoped></style>
