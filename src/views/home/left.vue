<script setup lang="ts">
import ChartTitle from '@comp/chartTitle/index.vue'
import ChartSchedule from '@comp/chartSchedule/index.vue'
import ChartAnnular from '@comp/chartAnnular/index.vue'

defineOptions({
  name: 'WLeft'
})
</script>

<template>
  <ChartTitle title="热力设备分布" />
  <ChartSchedule />
  <dv-decoration2 :dur="6" style="width: 100%; height: 0.3rem; margin-bottom: 0.7rem" />
  <ChartTitle title="能源消耗趋势" />
  <ChartAnnular />
  <dv-decoration2 :dur="6" style="width: 100%; height: 0.3rem; margin-bottom: 0.7rem" />
</template>

<style lang="scss" scoped></style>
