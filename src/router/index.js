import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main';
import Questions from '@/views/Questions';

Vue.use(VueRouter)
//const isProd = process.env.NODE_ENV === 'production'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions
  }
]

const router = new VueRouter({
  routes
})

export default router
