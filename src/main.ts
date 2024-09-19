import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'normalize.css/normalize.css'
import './styles/reset.css'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
