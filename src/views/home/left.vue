<script setup lang="ts">
import ChartTitle from '@comp/chartTitle/index.vue'
import ChartSchedule from '@comp/chartSchedule/index.vue'

defineOptions({
  name: 'WLeft'
})
</script>

<template>
  <ChartTitle title="设备统计" />
  <ChartSchedule />
</template>

<style lang="scss" scoped></style>
