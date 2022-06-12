import {createApp} from "vue";

import App from './App'

import router from './router'

import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文语言

import 'element-plus/dist/index.css'
import '@/assets/styles/index.scss' // global css


const app = createApp(App)



app.use(router)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale: locale,
})


app.mount('#app')
