import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    // 主页
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */'../views/home/Home')
  },
  {
    // 购物车页面
    path: '/cartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "CartList" */'../views/cartList/CartList')
  },
  {
    // 订单页面
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "OrderList" */'../views/orderList/OrderList')
  },
  {
    // 订单确认页面
    path: '/confirmOrder/:id',
    name: 'ConfirmOrder',
    component: () => import(/* webpackChunkName: "ConfirmOrder'" */'../views/confirmOrder/ConfirmOrder')
  },
  {
    // 个人页面
    path: '/person',
    name: 'Person',
    component: () => import(/* webpackChunkName: "Person'" */'../views/person/Person')
  },
  {
    // 商铺页面，通过id来标记跳转的店铺
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */'../views/shop/Shop')
  },
  {
    // 登录页面
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */'../views/login/Login'),
    // 如果isLogin是true（即用户已经登录），直接跳转到Home页面
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    // 注册页面
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */'../views/register/Register'),
    // 如果isLogin是true（即用户已经登录），直接跳转到Home页面
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 当跳转路由为Home页面，且isLogin为flase（即用户未登录时），跳转到Login登录页面
router.beforeEach((to, form, next) => {
  // localStorage.isLogin标记用户是否登录
  const isLogin = localStorage.isLogin
  const name = to.name
  // 跳转路由为Login或Register页面，为true
  const isLoginOrRegister = (name === 'Login' || name === 'Register')
  if (isLogin || isLoginOrRegister) {
    next()
  } else {
    next({ name: 'Login' })
  }
})
export default router
