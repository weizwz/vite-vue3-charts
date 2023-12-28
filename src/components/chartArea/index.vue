<script setup lang="ts">
import { ref, reactive } from 'vue'
import WChart from '@comp/chart/index.vue'
import { get_date } from '@/utils/date'

defineOptions({
  name: 'ChartArea'
})

const axis = get_date(30, true)
const max = 7
const series = baseData()
const option = {
  legend: {
    show: true,
    top: 5
  },
  grid: {
    top: '20',
    left: '10',
    right: '20',
    bottom: '20',
    containLabel: true
  },
  xAxis: {
    type: 'time',
    axisLabel: {
      formatter: function (value: string | number | Date) {
        // 坐标轴文字展示样式处理
        const date = new Date(value)
        const texts = [date.getMonth() + 1, date.getDate()]
        return texts.join('/')
      }
    }
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '50%']
  },
  series: series
}

function baseData() {
  const type = ['电力', '水力', '煤炭']
  const series = []
  for (const item of type) {
    const _series = {
      name: item,
      type: 'line',
      stack: 'Total',
      smooth: true,
      areaStyle: {},
      data: reactive([] as any[])
    }
    for (let i = 0; i < max; i++) {
      const base = i === 0 ? 100 : _series.data[i - 1].value[1]
      _series.data.push({
        name: new Date(axis[i]),
        value: [axis[i], base + randomData(5)]
      })
    }
    series.push(_series)
  }
  return series
}

function randomData(_increase: number) {
  const add = Math.random() >= 0.5 ? true : false
  let data = add ? Math.random() * 50 + _increase : _increase - Math.random() * 50
  data = data < 0 ? 0 : data
  return data
}

const chartAreaRef = ref()

let loop = 7
setInterval(() => {
  if (loop >= axis.length) {
    loop = 6
  }
  if (loop < 7) {
    option.series = baseData()
  } else {
    option.series[0].data.shift()
    option.series[0].data.push({
      name: new Date(axis[loop]),
      value: [axis[loop], option.series[0].data[max - 2].value[1] + randomData(5)]
    })
    option.series[1].data.shift()
    option.series[1].data.push({
      name: new Date(axis[loop]),
      value: [axis[loop], option.series[1].data[max - 2].value[1] + randomData(5)]
    })
    option.series[2].data.shift()
    option.series[2].data.push({
      name: new Date(axis[loop]),
      value: [axis[loop], option.series[2].data[max - 2].value[1] + randomData(5)]
    })
  }
  loop++
  chartAreaRef.value.setData(option)
}, 1000)
</script>

<template>
  <WChart ref="chartAreaRef" width="100%" height="calc(33.33% - 3rem)" :option="option" />
</template>

<style lang="scss" scoped></style>
