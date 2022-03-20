import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'

// import {
//   ElContainer,
//   ElMain,
//   ElAside,
//   ElHeader,
//   ElButton
// } from 'element-plus'

import { App, createVNode } from 'vue'

// 创建Icon组件
const Icon = (props: { icon: string }) => {
  const { icon } = props
  return createVNode(Icons[icon as keyof typeof Icons])
}

export default {
  install (app: App) {
    // 注册Icon组件
    // eslint-disable-next-line vue/multi-word-component-names
    app.component('Icon', Icon)
    app.use(ElementPlus) // 全局安装，
    // app.use(ElContainer)
    // app.use(ElAside)
    // app.use(ElHeader)
    // app.use(ElMain)
    // app.use(ElButton)
    // app.use(IconMenu)
    // app.use(Setting)
  }
}
