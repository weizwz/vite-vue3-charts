<script setup lang="ts">
import { ref } from 'vue'
import WHeader from '@/components/header/index.vue'
import { BorderBox13 as DvBorderBox13 } from '@kjgl77/datav-vue3'
import { BorderBox11 as DvBorderBox11 } from '@kjgl77/datav-vue3'
import { BorderBox8 as DvBorderBox8 } from '@kjgl77/datav-vue3'
import WLeft from '@views/home/left.vue'
import WCenter from '@views/home/center.vue'
import WRight from '@views/home/right.vue'
import WBottom from '@views/home/bottom.vue'

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
      <WHeader title="西安热力资源监控中心" />
      <div id="main">
        <div class="main-left">
          <dv-border-box13>
            <div dv-bg class="content padding1"><WLeft /></div>
          </dv-border-box13>
        </div>
        <div class="main-right">
          <div class="main-right-top">
            <div class="main-right-top-left">
              <dv-border-box11 title="西安热力分布" :title-width="300" :animate="true">
                <div dv-bg class="content padding1">
                  <div class="content-map"><WCenter /></div>
                </div>
              </dv-border-box11>
            </div>
            <div class="main-right-top-right">
              <dv-border-box13>
                <div dv-bg class="content padding1"><WRight /></div>
              </dv-border-box13>
            </div>
          </div>
          <div class="main-right-bottom">
            <dv-border-box8 :dur="5">
              <div dv-bg class="content padding1"><WBottom /></div>
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
    height: calc(100% - 120px);
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
            padding: 3.5rem 1rem 1rem;
            .content-map {
              width: 100%;
              height: 100%;
              position: relative;
              border-radius: 1rem;
              overflow: hidden;
            }
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
