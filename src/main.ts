import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import 'normalize.css/normalize.css'
import './styles/reset.css'

import WelcomePage from './views/WelcomePage.vue'
import CategoriesPage from './views/CategoriesPage.vue'
import App from './App.vue'

const app = createApp(App)
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: WelcomePage
  },
  {
    path: '/category',
    component: CategoriesPage
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(createPinia())
app.use(router)

app.mount('#app')
