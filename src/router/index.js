import {createRouter, createWebHashHistory} from 'vue-router'

// Vue.use(VueRouter)
// const HomePage = () => import('../views/HomePage')

const constantRoutes=[{
  path: '/',
  component: ()=> import('@/views/HomePage')
}]

const  router=createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

//
// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [{
//       path: '/',
//       component: HomePage
//     }
//   ]
// });


export default router;
