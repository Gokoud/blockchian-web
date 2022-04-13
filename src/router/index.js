import {createRouter, createWebHistory} from 'vue-router'

// 页面
const index = () => import('../views/index/index.vue')


const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      title:'首页'
    },
    component: index
  }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router