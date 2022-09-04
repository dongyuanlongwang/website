import {createRouter, createWebHashHistory} from 'vue-router'


const constantRoutes=[{
  path: '/',
  component: ()=> import('@/views/index.vue'),
  children:[
    {
      path: '/home',
      component: ()=> import('@/views/home.vue')
    },
    {
      path: '/about/about',
      component: ()=> import('@/views/about/about.vue')
    },
    {
      path: '/about/org',
      component: ()=> import('@/views/about/org.vue')
    },
  ]
}]

const  router=createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})


export default router;


