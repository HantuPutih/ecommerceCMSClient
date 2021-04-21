import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import ProductList from '../views/ProductList.vue'
import AddProduct from '../views/AddProduct.vue'
import ProductEdit from '../views/ProductEdit.vue'
import AddBanner from '../views/AddBanner.vue'
import BannerList from '../views/BannerList.vue'
import BannerEdit from '../views/BannerEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/ProductList',
    name: 'ProductList',
    component: ProductList,
    children: [
      {
        name: 'ProductEdit',
        path: ':id',
        component: ProductEdit
      }
    ]
  },
  {
    path: '/AddProduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/BannerList',
    name: 'BannerList',
    component: BannerList,
    children: [
      {
        name: 'BannerEdit',
        path: ':id',
        component: BannerEdit
      }
    ]
  },
  {
    path: '/AddBanner',
    name: 'AddBanner',
    component: AddBanner
  },
  {
    path: '*',
    name: 'notFound',
    component: { template: '<h1> page not found</h1>' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('access_token')
  if (!user && (to.name === 'ProductList' || to.name === 'AddProduct' || to.name === 'BannerList' || to.name === 'AddBanner')) {
    next({ name: 'Login' })
  } else if (user && to.name === 'Login') {
    next({ name: 'ProductList' })
  } else if ((user && to.name === 'notFound') || (!user && to.name === 'notFound')) {
    next({ name: 'notFound' })
  } else {
    next()
  }
})

export default router
