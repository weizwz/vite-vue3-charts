<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useUserStore } from '@store/user'
import logoImg from '@/assets/logo.png'

const userStore = useUserStore()
// 获取state使用computed或者使用storeToRefs，直接使用不具备响应式（拿到的永远是初次的值）
const username = computed(() => userStore.userInfo.name)

defineOptions({
  name: 'WHeader'
})
// 组件传参
const props = defineProps({
  logo: {
    type: String, //参数类型
    default: logoImg, //默认值
    required: false //是否必须传递
  },
  title: {
    type: String, //参数类型
    default: '监控平台', //默认值
    required: true //是否必须传递
  }
})

const logoDom = ref()
//声明周期函数，自动执行初始化
onMounted(() => {
  const dom = logoDom.value
  dom.src = props.logo
})
</script>

<template>
  <div class="w-header">
    <div class="logo">
      <img ref="logoDom" alt="logo" width="120" />
    </div>
    <div class="title-wrapper">
      <dv-decoration7>
        <div class="title">&nbsp;{{ props.title }}&nbsp;</div>
      </dv-decoration7>
    </div>
    <div class="info">
      <a href="https://gitee.com/weizwz/vite-vue3-charts" target="_blank">{{ username }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.w-header {
  height: 80px;
  padding: 0 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    flex: 1;
    font-size: 2rem;
    > img {
      vertical-align: middle;
    }
  }
  .info {
    flex: 1;
    text-align: right;
    font-size: 1.2rem;
    a {
      color: #fff;
    }
  }
  .title {
    font-size: 3rem;
    text-align: center;
    --c: var(--main-color);
    --w1: radial-gradient(100% 57% at top, #0000 100%, var(--c) 100.5%) no-repeat;
    --w2: radial-gradient(100% 57% at bottom, var(--c) 100%, #0000 100.5%) no-repeat;
    background: var(--w1), var(--w2), var(--w1), var(--w2);
    background-position-x:
      -200%,
      -100%,
      0%,
      100%;
    background-position-y: 100%;
    background-size: 50.5% 100%;
    animation: m 3s infinite linear;
    font-weight: bold;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-stroke: 2px var(--c);
  }

  @keyframes m {
    0% {
      background-position-x:
        -200%,
        -100%,
        0%,
        100%;
    }

    100% {
      background-position-x: 0%, 100%, 200%, 300%;
    }
  }
}
</style>
