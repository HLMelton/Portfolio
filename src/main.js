import { createApp } from 'vue'
import App from './App.vue'
import '../index.css'
import { TroisJSVuePlugin } from 'troisjs'

createApp(App).use(TroisJSVuePlugin).mount('#app')