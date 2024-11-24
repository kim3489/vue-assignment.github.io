import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "@/assets/css/tailwind.css";
import axios from "axios";
library.add(faUserSecret)

axios.defaults.baseURL = 'https://kim3489.github.io/vue-assignment.github.io/'
App.config.globalProperties.axios.axios;
createApp(App).use(router)
    .config.globalProperties.axios
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')