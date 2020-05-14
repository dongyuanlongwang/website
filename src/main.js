import Vue from 'vue'
import store from './store'
import router from './router'
import App from './components/App'

new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
 