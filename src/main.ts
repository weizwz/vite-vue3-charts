import { createApp } from 'vue'
import pinia from '@/store'
import './style.css'
import App from './App.vue'
import DataVVue3 from '@kjgl77/datav-vue3'

import router from '@/router/index'

// 引入 echarts
import * as echarts from 'echarts'
import themeJSON from '@/assets/weizwz.json'
echarts.registerTheme('weizwz', themeJSON)

const app = createApp(App)
// 全局挂载 echarts
app.config.globalProperties.$echarts = echarts

app.use(router).use(pinia).use(DataVVue3).mount('#app')
