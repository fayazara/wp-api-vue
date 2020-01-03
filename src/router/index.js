import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import('../views/Post.vue'),
    props: true
  },
  {
    path: '/category/:id',
    name: 'category',
    component: () => import('../views/Category.vue'),
    props: true
  },
  {
    path: '/tag/:id',
    name: 'tag',
    component: () => import('../views/Tag.vue'),
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
