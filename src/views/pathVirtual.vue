<script setup lang="ts">
import { computed, ref } from 'vue'
import WHeader from '@/components/header/index.vue'
import PathVirtual from '@/components/chartPathVirtual/index.vue'
import { sites } from '@/components/chartPathVirtual/data'
import { useCarStore } from '@store/car'

const carStore = useCarStore()

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

const sitesRef = ref(sites)
const operations = computed(() => {
  return sitesRef.value.filter((item) => item.index !== 999 && item.nodeName !== '')
})

const go = (idx: number) => {
  carStore.setToIdx(idx)
}
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
          <div class="operation">
            <dv-border-box10>
              <div class="content">
                <h3 class="operation-title">操作面板</h3>
                <div class="wrapper">
                  <div v-for="item of operations" v-bind:key="item.index" class="operation-item" @click="go(item.index)">
                    {{ item.nodeName }}
                    <span class="go">➡️</span>
                  </div>
                </div>
              </div>
            </dv-border-box10>
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
    position: relative;
    .content {
      height: 100%;
    }
    .operation {
      position: absolute;
      right: 30px;
      bottom: 30px;
      width: 50%;
      height: 350px;
      .content {
        padding: 4px;
        box-sizing: border-box;
      }
      .operation-title {
        margin: 0;
        line-height: 42px;
        text-indent: 10px;
        background: rgba(29, 193, 245, 0.5);
        border-radius: 6px 6px 0 0;
        font-size: 16px;
      }
      .wrapper {
        height: 252px;
        width: calc(100% - 60px);
        margin: 20px 30px 30px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .operation-item {
          width: 15%;
          height: 40px;
          background: rgba(29, 193, 245, 0.6);
          border-radius: 5px;
          text-align: center;
          line-height: 40px;
          margin: 0 2.5%;
          position: relative;
          cursor: pointer;
          .go {
            display: none;
            position: absolute;
            right: 20px;
          }
          &:hover {
            background: #1dc1f5;
            font-weight: bold;
            font-size: 18px;
            .go {
              display: inline-block;
              transition: 0.5s;
            }
          }
        }
      }
    }
  }
}
</style>
