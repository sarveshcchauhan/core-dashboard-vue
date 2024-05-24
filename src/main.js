import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import CKEditor from '@ckeditor/ckeditor5-vue'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(CKEditor)
app.use(createPinia())
app.use(router)
app.mount('#app')
