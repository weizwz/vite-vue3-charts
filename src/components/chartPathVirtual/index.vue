<script setup lang="ts">
import { computed, onMounted, ref, toRaw, watch } from 'vue'
import WChart from '@comp/chart/index.vue'
import { sites } from './data'
import { pathVirtualNodeData, pathVirtualLineData } from 'types/echart'
import { useCarStore } from '@store/car'

defineOptions({
  name: 'PathVirtual'
})

// 监听 carStore
const carStore = useCarStore()
const carTo = computed(() => carStore.to)
watch(carTo, () => {
  updateData()
})

const option = {
  grid: {
    top: '5%',
    left: '4%',
    right: '4%',
    bottom: '5%',
    containLabel: true
  },
  backgroundColor: 'transparent',
  xAxis: {
    min: 0,
    max: 1300,
    show: false,
    type: 'value',
    axisPointer: {
      show: false
    }
  },
  yAxis: {
    min: 0,
    max: 500,
    show: false,
    type: 'value',
    axisPointer: {
      show: false
    }
  },
  series: [
    {
      type: 'effectScatter',
      showEffectOn: 'render', // 'render' 绘制完成后显示特效,'emphasis' 高亮（hover）的时候显示特效
      label: {
        show: true,
        position: 'top',
        color: '#fff',
        fontSize: 16,
        formatter: (item: { data: { nodeName: any } }) => {
          return item.data.nodeName
        }
      },
      itemStyle: {
        color: '#ff9115'
      },
      emphasis: {
        label: {
          color: '#43dcff',
          fontSize: 18
        }
      },
      rippleEffect: {
        // color:'purple',  //涟漪颜色,默认为散点自身颜色
        period: 4, // 动画周期
        scale: '1', // 涟漪规模
        brushType: 'stroke', //动画方式,全填充或只有线条,'fill' || 'stroke'
        number: 0
      },
      data: <pathVirtualNodeData[]>[],
      z: 4
    },
    {
      type: 'lines',
      polyline: false,
      coordinateSystem: 'cartesian2d',
      lineStyle: {
        type: 'solid',
        width: 3,
        color: '#fbfcfd',
        opacity: 1,
        curveness: 0
      },
      effect: {
        show: false
      },
      data: <pathVirtualLineData[]>[],
      z: 2
    },
    {
      type: 'lines',
      id: 'virtualLines',
      polyline: false,
      zlevel: 3,
      coordinateSystem: 'cartesian2d',
      lineStyle: {
        type: 'solid',
        width: 5,
        color: '#30e470',
        opacity: 1,
        curveness: 0
      },
      effect: {
        show: true,
        constantSpeed: 80,
        trailLength: 0.3,
        // 箭头 M1023.97952 514.7904L512 0 0.02048 514.7904h301.32736v421.37088h421.30944v-421.37088h301.32224z
        symbol:
          'path://M877.763916 956.084191 510.975159 589.29441 144.186402 956.084191l-80.984453-80.983429 447.77321-447.769117 447.77321 447.769117L877.763916 956.084191zM877.763916 596.672448 510.975159 229.883691 144.186402 596.672448l-80.984453-80.989569 447.77321-447.768093 447.77321 447.768093L877.763916 596.672448zM877.763916 596.672448',
        color: '#ffffff',
        symbolSize: 8
      },
      data: <pathVirtualLineData[]>[],
      z: 3
    }
  ]
}

/**
 * 数据初始化处理
 */
const getChartData = (nodes: any[], basic: boolean) => {
  const nodeData: pathVirtualNodeData[] = []
  const lineData: pathVirtualLineData[] = []
  for (var j = 0; j < nodes.length; j++) {
    let { index, value, nodeName, svgPath, symbol, symbolSize, symbolOffset, itemStyle, label, to, rippleEffect } =
      nodes[j]
    const _symbol = symbol || 'circle'
    const size = typeof symbolSize !== 'undefined' ? symbolSize : 10
    if (index === 999) {
      const carPosition = computed(() => carStore.position)
      value = toRaw(carPosition.value)
    }
    let node: pathVirtualNodeData = {
      index,
      nodeName,
      value: value,
      symbolSize: size,
      symbol: svgPath ? 'path://' + svgPath : _symbol
    }
    if (label) {
      node.label = label
    }
    if (symbolOffset) {
      node.symbolOffset = symbolOffset
    }
    if (itemStyle) {
      node.itemStyle = itemStyle
    }
    if (rippleEffect) {
      node.rippleEffect = rippleEffect
    }
    nodeData.push(node)
    if (to && to.length > 0) {
      let tos = to
      for (const tempIdx of tos) {
        if (tempIdx > nodes.length - 1) break
        const temp = nodes[tempIdx]
        const line: pathVirtualLineData = {
          coords: [value, temp.value],
          from: nodeName,
          formIdx: j,
          to: temp.nodeName,
          toIdx: tempIdx
        }
        if (basic) {
          line.attr = 'basic'
        }
        lineData.push(line)
      }
    }
  }
  return { nodeData, lineData }
}

onMounted(() => {
  changeData()
})

type ChildCtx = InstanceType<typeof WChart>
// 要和子组件的 ref 名称一致
const wchartRef = ref<ChildCtx | null>(null)
// 初始化图表
const changeData = () => {
  const { nodeData, lineData } = getChartData(sites, true)
  option.series[0].data = nodeData
  option.series[1].data = lineData
  wchartRef.value?.setData(option)
}
// 修改汽车位置，添加流动线路
const updateData = () => {
  console.log('正在更新线路')
  option.series[2].data = []
}
</script>

<template>
  <WChart ref="wchartRef" width="100%" height="100%" :option="option" />
</template>

<style lang="scss" scoped></style>
