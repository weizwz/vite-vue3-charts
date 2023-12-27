<script setup lang="ts">
import ChartTitle from '@comp/chartTitle/index.vue'
import ChartSchedule from '@comp/chartSchedule/index.vue'
import ChartArea from '@comp/chartArea/index.vue'
import ChartLoop from '@comp/chartLoop/index.vue'

defineOptions({
  name: 'WLeft'
})
</script>

<template>
  <div style="margin-bottom: 0.5rem"></div>
  <ChartTitle title="热力设备分布" />
  <ChartSchedule />
  <dv-decoration2 :dur="6" style="width: 100%; height: 0.3rem; margin-bottom: 0.7rem" />
  <ChartTitle title="能源消耗趋势" />
  <ChartArea />
  <dv-decoration2 :dur="6" style="width: 100%; height: 0.3rem; margin-bottom: 0.7rem" />
  <ChartTitle title="热力供需统计" />
  <ChartLoop />
</template>

<style lang="scss" scoped></style>
