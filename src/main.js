import { createApp } from 'vue'
import App from './App.vue'
import '../index.css'
import { TroisJSVuePlugin } from 'troisjs'

createApp(App).mount('#app').use(TroisJSVuePlugin)