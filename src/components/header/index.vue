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
const isFullscreen = ref(false)

//声明周期函数，自动执行初始化
onMounted(() => {
  const dom = logoDom.value
  dom.src = props.logo

  // 监听全屏状态变化
  document.addEventListener('fullscreenchange', handleFullscreenChange)
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
  document.addEventListener('mozfullscreenchange', handleFullscreenChange)
  document.addEventListener('MSFullscreenChange', handleFullscreenChange)
})

// 处理全屏状态变化
const handleFullscreenChange = () => {
  isFullscreen.value = !!(
    document.fullscreenElement ||
    (document as any).webkitFullscreenElement ||
    (document as any).mozFullScreenElement ||
    (document as any).msFullscreenElement
  )
}

// 切换全屏
const toggleFullscreen = () => {
  if (!isFullscreen.value) {
    // 进入全屏
    const element = document.documentElement
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if ((element as any).webkitRequestFullscreen) {
      ;(element as any).webkitRequestFullscreen()
    } else if ((element as any).mozRequestFullScreen) {
      ;(element as any).mozRequestFullScreen()
    } else if ((element as any).msRequestFullscreen) {
      ;(element as any).msRequestFullscreen()
    }
  } else {
    // 退出全屏
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if ((document as any).webkitExitFullscreen) {
      ;(document as any).webkitExitFullscreen()
    } else if ((document as any).mozCancelFullScreen) {
      ;(document as any).mozCancelFullScreen()
    } else if ((document as any).msExitFullscreen) {
      ;(document as any).msExitFullscreen()
    }
  }
}
</script>

<template>
  <div class="w-header">
    <div class="logo">
      <router-link to="/">
        <img ref="logoDom" alt="logo" width="120" />
      </router-link>
    </div>
    <div class="title-wrapper">
      <dv-decoration7>
        <div class="title">&nbsp;{{ props.title }}&nbsp;</div>
      </dv-decoration7>
    </div>
    <div class="info">
      <a href="https://github.com/weizwz" target="_blank">{{ username }}</a>
      <!-- <a href="https://gitee.com/weizwz/vite-vue3-charts" target="_blank">Gitee</a> -->
      <router-link to="/path/virtual">其他</router-link>
      <button class="fullscreen-btn" @click="toggleFullscreen" :title="isFullscreen ? '退出全屏' : '进入全屏'">
        <svg v-if="!isFullscreen" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.w-header {
  height: 120px;
  padding: 0 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    flex: 1;
    font-size: 2rem;
    a > img {
      vertical-align: middle;
    }
  }
  .info {
    flex: 1;
    text-align: right;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    a {
      color: #fff;
    }
    .fullscreen-btn {
      background: transparent;
      border: 2px solid var(--main-color);
      color: var(--main-color);
      padding: 8px;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        background: var(--main-color);
        color: #fff;
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }

      svg {
        width: 20px;
        height: 20px;
      }
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
