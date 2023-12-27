<script setup lang="ts">
import { onMounted, getCurrentInstance, defineProps } from 'vue'

defineOptions({
  name: 'WChart'
})

// 组件传参
const props = defineProps({
  width: {
    type: String, //参数类型
    default: '100%', //默认值
    required: false //是否必须传递
  },
  height: {
    type: String, //参数类型
    default: '10rem', //默认值
    required: true //是否必须传递
  },
  option: {
    type: Object, //参数类型
    default: () => {
      return {}
    }, //默认值
    required: true //是否必须传递
  }
})

let chart

//声明周期函数，自动执行初始化
onMounted(() => {
  init()

  window.addEventListener('resize', resize, false)
})

//初始化函数
function init() {
  // 基于准备好的dom，初始化echarts实例
  const { ctx } = getCurrentInstance() as any
  const dom = ctx.$refs['wchart']
  // 通过 internalInstance.appContext.config.globalProperties 获取全局属性或方法
  let internalInstance = getCurrentInstance()
  let echarts = internalInstance?.appContext.config.globalProperties.$echarts

  chart = echarts.init(dom, 'weizwz')
  // 渲染图表
  chart.setOption(props.option)
}

function resize() {
  chart.resize()
}
</script>

<template>
  <div ref="wchart" :style="`width: ${props.width} ; height: ${props.height}`" />
</template>

<style lang="scss" scoped></style>
