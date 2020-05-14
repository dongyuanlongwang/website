import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const HomePage = () => import('../views/HomePage')


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      component: HomePage
    }
  ]
});


export default router;
