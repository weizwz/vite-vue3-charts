<script setup lang="ts">
import { ref } from 'vue'
import WHeader from '@/components/header/index.vue'
import { BorderBox13 as DvBorderBox13 } from '@kjgl77/datav-vue3'
import { BorderBox11 as DvBorderBox11 } from '@kjgl77/datav-vue3'
import { BorderBox8 as DvBorderBox8 } from '@kjgl77/datav-vue3'

defineOptions({
  name: 'V-home'
})

const title = '西安热力资源监控中心'

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
      <WHeader :title="title" />
      <div id="main">
        <div class="main-left">
          <dv-border-box13>
            <div dv-bg class="content padding1">dv-border-box-13</div>
          </dv-border-box13>
        </div>
        <div class="main-right">
          <div class="main-right-top">
            <div class="main-right-top-left">
              <dv-border-box11 title="市区热力分布" :title-width="400" :animate="true">
                <div dv-bg class="content padding1">dv-border-box-11</div>
              </dv-border-box11>
            </div>
            <div class="main-right-top-right">
              <dv-border-box13>
                <div dv-bg class="content padding1">dv-border-box-13</div>
              </dv-border-box13>
            </div>
          </div>
          <div class="main-right-bottom">
            <dv-border-box8 :dur="5">
              <div dv-bg class="content padding1">dv-border-box8</div>
            </dv-border-box8>
          </div>
        </div>
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
    .main-left {
      width: 25%;
      height: 100%;
      margin-right: var(--margin);
    }
    .main-right {
      width: calc(75% - var(--margin));
      height: 100%;
      .main-right-top {
        height: calc(60% - var(--margin));
        margin-bottom: var(--margin);
        display: flex;
        .main-right-top-left {
          width: calc(66.66% - var(--margin));
          margin-right: var(--margin);
          .content {
            padding-top: 3rem;
          }
        }
        .main-right-top-right {
          width: 33.33%;
        }
      }
      .main-right-bottom {
        height: 40%;
      }
    }
  }
}
</style>
