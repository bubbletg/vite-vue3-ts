
// import ElementPlus from 'element-plus'
import { ElButton } from 'element-plus'

import { App } from 'vue'

export default {
  install (app: App) {
    // app.use(ElementPlus) // 全局安装，
    app.use(ElButton) // 按需引入
  }
}
