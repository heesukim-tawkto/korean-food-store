import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponents from '@/components'
import router from './router/index.ts';

const app = createApp(App)

app.use(router)
app.use(GlobalComponents)

app.mount('#app')
