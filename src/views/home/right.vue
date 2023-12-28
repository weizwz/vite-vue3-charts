<script setup lang="ts">
import ChartTitle from '@comp/chartTitle/index.vue'
import ChartRanking from '@comp/chartRanking/index.vue'

defineOptions({
  name: 'WRight'
})
</script>

<template>
  <div style="margin-bottom: 0.5rem"></div>
  <ChartTitle title="供热公司排名" />
  <ChartRanking />
</template>

<style lang="scss" scoped></style>
