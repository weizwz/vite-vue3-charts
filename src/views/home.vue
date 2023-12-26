<script setup lang="ts">
import { ref } from 'vue'
import WHeader from '@/components/header/index.vue'

defineOptions({
  name: 'V-home'
})

let loading = ref(true)
const loaded = () => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
loaded()
</script>

<template>
  <div id="home">
    <dv-full-screen-container>
      <dv-loading v-if="loading">
        <div color-white>Loading...</div>
      </dv-loading>
      <WHeader />
    </dv-full-screen-container>
  </div>
</template>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
}
</style>
