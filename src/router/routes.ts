import { type RouteRecordRaw } from 'vue-router'

import Categories from '@/pages/Categories.vue'
import Welcome from '@/pages/Welcome.vue'
import Config from '@/pages/Config.vue'
import Question from '@/pages/Question.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Welcome
  },
  {
    path: '/category',
    component: Categories
  },
  { path: '/category/:categoryId/config', component: Config },
  { path: '/category/:categoryId/questions/:questionId', component: Question }
]

export default routes
