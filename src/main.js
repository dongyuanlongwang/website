import {createApp} from "vue";

import App from './App'



// import store from './store'
import router from './router'




const app = createApp(App)



app.use(router)

// new Vue({
//   router,
//   store,
//   template: '<App/>',
//   components: { App }
// }).$mount('#app')


app.mount('#app')
