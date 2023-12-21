import { Router, createRouter, createWebHistory } from 'vue-router'

/** 自动导入 src/router/modules 下的静态路由
 * import.meta.glob使用说明：https://cn.vitejs.dev/guide/features#glob-import
 */
const modules: Record<string, any> = import.meta.glob(['./modules/**/*.ts'], {
  eager: true
})

/** 初始路由 **/
const routes: any[] = []

Object.keys(modules).forEach((key) => {
  const module = modules[key].default
  if (Array.isArray(module)) {
    for (const item of module) {
      routes.push(item)
    }
  } else {
    routes.push(module)
  }
})

/**
 * 创建路由实例
 * createRouter选项有：https://router.vuejs.org/zh/api/interfaces/RouterOptions.html
 * hash模式使用createWebHashHistory(): https://router.vuejs.org/zh/api/#Functions-createWebHashHistory
 */
export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
  scrollBehavior(_to, from, savedPosition) {
    return new Promise((resolve) => {
      if (savedPosition) {
        return savedPosition
      } else {
        if (from.meta.saveSrollTop) {
          const top: number = document.documentElement.scrollTop || document.body.scrollTop
          resolve({ left: 0, top })
        }
      }
    })
  }
})

/**
 * 路由守卫
 * https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
 */
router.beforeEach((to, _from, next) => {
  // isAuthenticated 代表你的鉴权
  const isAuthenticated = true
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router
