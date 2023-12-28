<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
import WChart from '@comp/chart/index.vue'
import 'echarts/extension/bmap/bmap'
import xianJson from '@/assets/xian.json'

defineOptions({
  name: 'ChartMap'
})

const option = {
  animation: false,
  backgroundColor: 'transparent',
  bmap: {
    center: [108.93957150268, 34.21690396762],
    zoom: 12,
    roam: true
  },
  visualMap: {
    show: false,
    top: 'top',
    min: 0,
    max: 5,
    seriesIndex: 0,
    calculable: true,
    inRange: {
      color: ['blue', 'blue', 'green', 'yellow', 'red']
    }
  },
  series: [
    {
      type: 'heatmap',
      coordinateSystem: 'bmap',
      data: reactive([] as any[]),
      pointSize: 5,
      blurSize: 6
    }
  ]
}

const initBefore = () => {
  return new Promise((resolve) => {
    // 处理数据
    const arr = []
    for (const item of xianJson.features) {
      const positions = item.geometry.coordinates[0][0]
      for (const temp of positions) {
        const position = temp.concat(Math.random() * 1000 + 200)
        arr.push(position)
      }
    }
    option.series[0].data = arr
    resolve(option)
  })
}

const initAfter = (chart: {
  getModel: () => {
    (): any
    new (): any
    getComponent: { (arg0: string): { (): any; new (): any; getBMap: { (): any; new (): any } }; new (): any }
  }
}) => {
  // 添加百度地图插件
  var bmap = chart.getModel().getComponent('bmap').getBMap()
  bmap.setMapStyleV2({
    styleId: 'bc05830a75e51be40a38ffc9220613bb'
  })
  // bmap.addControl(new BMap.MapTypeControl())
}
</script>

<template>
  <WChart width="100%" height="100%" :option="option" :initBefore="initBefore" :initAfter="initAfter" />
</template>

<style lang="scss" scoped></style>
