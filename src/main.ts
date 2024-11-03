import './assets/main.css'
import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { BindOncePlugin } from 'vue-bind-once'

const pinia = createPinia()
const app = createApp(App)
app.use(BindOncePlugin)
app.use(pinia)
app.mount('#app')
