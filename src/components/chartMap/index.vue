<script setup lang="ts">
import axios from 'axios'
import WChart from '@comp/chart/index.vue'
import 'echarts/extension/bmap/bmap'

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
      data: [],
      pointSize: 5,
      blurSize: 6
    }
  ]
}

const initBefore = () => {
  return new Promise((resolve, reject) => {
    axios.get('src/assets/xian.json').then(
      (resp) => {
        const { data } = resp
        // 处理数据
        const arr = []
        for (const item of data.features) {
          const positions = item.geometry.coordinates[0][0]
          for (const temp of positions) {
            const position = temp.concat(Math.random() * 1000 + 200)
            arr.push(position)
          }
        }
        option.series[0].data = arr
        resolve(option)
      },
      (error) => {
        reject(error)
      }
    )
  })
}

const initAfter = (chart) => {
  // 添加百度地图插件
  var bmap = chart.getModel().getComponent('bmap').getBMap()
  console.log(bmap)
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
