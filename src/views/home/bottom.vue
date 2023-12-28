<script setup lang="ts">
import ChartTitle from '@comp/chartTitle/index.vue'
import ChartBar from '@comp/chartBar/index.vue'

defineOptions({
  name: 'WBottom'
})
</script>

<template>
  <ChartTitle title="温度全月监控" />
  <ChartBar />
</template>

<style lang="scss" scoped></style>
