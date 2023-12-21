import { createApp } from 'vue'
import pinia from '@/store'
import './style.css'
import App from './App.vue'
import DataVVue3 from '@kjgl77/datav-vue3'

import router from '@/router/index'

createApp(App).use(router).use(pinia).use(DataVVue3).mount('#app')
