<script setup lang="ts">
import { onMounted, ref } from 'vue'
import WChart from '@comp/chart/index.vue'
import { sites } from './data'
import { pathVirtualNodeData, pathVirtualLineData } from 'types/echart'

defineOptions({
  name: 'PathVirtual'
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
      showEffectOn: 'emphasis', // 'render' 绘制完成后显示特效,'emphasis' 高亮（hover）的时候显示特效
      label: {
        show: true,
        position: 'top',
        color: '#fff',
        fontSize: 12,
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
          fontSize: 14
        }
      },
      rippleEffect: {
        // color:'purple',  //涟漪颜色,默认为散点自身颜色
        // brushType:'fill' //动画方式,全填充或只有线条,'stroke'
        period: 4, // 动画周期
        scale: '1', // 涟漪规模
        brushType: 'stroke',
        number: 1
      },
      data: <pathVirtualNodeData[]>[],
      zlevel: 3,
      z: 3
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
      zlevel: 2,
      z: 2
    }
  ]
}

/**
 * 数据处理
 */
const getChartData = (nodes: any[], basic: boolean) => {
  const nodeData: pathVirtualNodeData[] = []
  const lineData: pathVirtualLineData[] = []
  for (var j = 0; j < nodes.length; j++) {
    const { index, value, nodeName, svgPath, symbol, symbolSize, symbolOffset, itemStyle, label, to, rippleEffect } =
      nodes[j]
    const _symbol = symbol || 'circle'
    const size = typeof symbolSize !== 'undefined' ? symbolSize : 12
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

const changeData = () => {
  const { nodeData, lineData } = getChartData(sites, true)
  option.series[0].data = nodeData
  option.series[1].data = lineData
  wchartRef.value?.setData(option)
}
</script>

<template>
  <WChart ref="wchartRef" width="100%" height="100%" :option="option" />
</template>

<style lang="scss" scoped></style>
