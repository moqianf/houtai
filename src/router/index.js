import VueRouter from 'vue-router'


const router =  new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('../pages/Main.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../pages/home'),
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('../pages/user')
        }
      ]
    },

  ]
})

export default router

