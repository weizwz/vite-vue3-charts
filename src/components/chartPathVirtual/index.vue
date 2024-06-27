<script setup lang="ts">
import { computed, onMounted, ref, toRaw, watch } from 'vue'
import WChart from '@comp/chart/index.vue'
import { sites } from './data'
import { pathVirtualNodeData, pathVirtualLineData } from 'types/echart'
import { useCarStore } from '@store/car'
import { lineDirection } from '@/utils/tools'

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
      symbolSize: 12,
      data: <pathVirtualNodeData[]>[],
      zlevel: 4
    },
    {
      type: 'lines', // 基础线路
      polyline: false,
      coordinateSystem: 'cartesian2d',
      lineStyle: {
        type: 'solid',
        width: 5,
        color: '#fbfcfd',
        opacity: 1,
        curveness: 0
      },
      effect: {
        show: false
      },
      data: <pathVirtualLineData[]>[],
      zlevel: 2
    },
    {
      type: 'lines', // 运动线路
      id: 'virtualLines',
      polyline: false,
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
        constantSpeed: 120,
        trailLength: 0.3,
        // 箭头 M1023.97952 514.7904L512 0 0.02048 514.7904h301.32736v421.37088h421.30944v-421.37088h301.32224z
        symbol: 'arrow',
        color: '#ffdb5c',
        symbolSize: 10
      },
      data: <pathVirtualLineData[]>[],
      zlevel: 3
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
    if (index === 999) {
      const carPosition = computed(() => carStore.position)
      value = toRaw(carPosition.value)
    }
    let node: pathVirtualNodeData = {
      index,
      nodeName,
      value: value,
      symbol: svgPath ? 'path://' + svgPath : _symbol
    }
    if (symbolSize) {
      node.symbolSize = symbolSize
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
/**
 * 运动线路计算
 */
const getRunData = () => {
  // 比较目的地和初始点
  const direction = lineDirection(carStore.position, carTo.value.value)
  // 如果是顺路径走，从目的地倒序查找到汽车位置为止
  let nodeData = [carTo.value]
  // 线路数据
  let lineData = []
  if (direction) {
    getRunNode(sites, nodeData, carTo.value)
    // 最后一站点不需要再循环
    let findCar = false
    for (let i = 0; i < nodeData.length - 1; i++) {
      const item = nodeData[i]
      let j = i
      const nextItem = nodeData[j + 1]
      // 从汽车所在位置开始
      if (item.value[0] === carStore.position[0] && item.value[1] === carStore.position[1]) {
        findCar = true
      }
      if (findCar) {
        const line: pathVirtualLineData = {
          coords: [item.value, nextItem.value],
          from: item.nodeName,
          formIdx: item.index,
          to: nextItem.nodeName,
          toIdx: nextItem.index
        }
        lineData.push(line)
      }
    }
  }
  return lineData
}
// 从目的地倒序 递归计算需要经过哪些站点
const getRunNode = (allNodes: any[], nodes: any[], toNode: any) => {
  for (const item of allNodes) {
    const toIdx = item.to
    if (toIdx && toIdx?.indexOf(toNode.index) !== -1) {
      nodes.unshift(item)
      getRunNode(allNodes, nodes, item)
      break
    }
  }
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
  option.series[2].data = getRunData()
  wchartRef.value?.setData(option)
}
</script>

<template>
  <WChart ref="wchartRef" width="100%" height="100%" :option="option" />
</template>

<style lang="scss" scoped></style>
