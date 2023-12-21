import { createApp } from 'vue'
import pinia from '@/store'
import './style.css'
import App from './App.vue'

import router from '@/router/index'

createApp(App).use(router).use(pinia).mount('#app')
