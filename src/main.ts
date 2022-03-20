import { createApp } from 'vue'
import router from './router'
import { store, key } from './store'
import App from './App.vue'
import elementPlus from './plugins/element-plus'
import './styles/index.scss'

createApp(App)
  .use(router)
  .use(store, key)
  .use(elementPlus)
  .mount('#app')
