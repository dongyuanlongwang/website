import {createApp} from "vue";

import App from './App.vue'

import router from './router/index'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import 'element-plus/dist/index.css'
// import './assets/styles/element.scss'

import './index.css'

const app = createApp(App)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'



app.use(router)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale: zhCn,
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.mount('#app')
