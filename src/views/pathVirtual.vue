<script setup lang="ts">
import { ref } from 'vue'
import WHeader from '@/components/header/index.vue'
import PathVirtual from '@/components/chartPathVirtual/index.vue'

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
      <WHeader title="虚拟线路地图" />
      <div id="main">
        <dv-border-box13>
          <div dv-bg class="content">
            <PathVirtual />
          </div>
        </dv-border-box13>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;

  #main {
    width: 100%;
    height: calc(100% - 80px);
    padding: 1rem 2rem 2rem;
    box-sizing: border-box;
    display: flex;
    .content {
      height: 100%;
    }
  }
}
</style>
