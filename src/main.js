import '@/assets/css/fontawesome-all.min.css'
import '@/assets/css/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
