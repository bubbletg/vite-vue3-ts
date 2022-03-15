import { createApp } from 'vue'
import App from './App.vue'

let count: number = 100
console.log('🚀 ~ file: main.ts ~ line 5 ~ count', count)

count = 222221
console.log('🚀 ~ file: main.ts ~ line 8 ~ count', count)

createApp(App).mount('#app')
