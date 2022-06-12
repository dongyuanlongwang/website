import {createRouter, createWebHashHistory} from 'vue-router'

// Vue.use(VueRouter)
// const HomePage = () => import('../views/HomePage')

const constantRoutes=[{
  path: '/',
  component: ()=> import('@/views/index'),
  children:[
    {
      path: '/home',
      component: ()=> import('@/views/home')
    },
    {
      path: '/about/about',
      component: ()=> import('@/views/about/about')
    },
    {
      path: '/about/org',
      component: ()=> import('@/views/about/org')
    },
  ]
}]

const  router=createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})


export default router;
