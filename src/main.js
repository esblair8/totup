// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faCalendar, faFile } from '@fortawesome/free-regular-svg-icons'
import {
  faFileContract,
  faBoxArchive,
  faInfo,
  faLock,
  faBars,
  faXmark,
  faXmarkCircle,
  faPerson,
  faUser,
  faPenToSquare,
  faChild,
  faEnvelope as blockEnvelope,
  faCheck,
  faI
} from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(
  faEnvelope,
  faCalendar,
  faFile,
  faCheck,
  faLock,
  faGoogle,
  faXmark,
  faFacebook,
  faPerson,
  faUser,
  faPenToSquare,
  faChild,
  blockEnvelope,
  faBars,
  faFileContract,
  faInfo,
  faBoxArchive,
  faXmarkCircle,
  faI
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
