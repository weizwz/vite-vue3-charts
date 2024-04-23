const routes = [
  {
    path: '/',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login.vue') //路由懒加载
  },
  {
    path: '/path/virtual',
    component: () => import('@/views/pathVirtual.vue') //路由懒加载
  }
]

export default routes
