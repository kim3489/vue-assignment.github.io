import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

import "@/assets/css/tailwind.css";

import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

// 라우터 사용
app.use(router)

// 상태 관리 스토어 사용
app.use(store)

// 전역 에러 핸들러 설정 (선택사항)
app.config.errorHandler = (err) => {
    // 에러 처리 로직
    console.error(err)
}

// 전역 속성 설정 (선택사항)
app.config.globalProperties.$someGlobalMethod = () => {
    // 일부 전역 메서드
}

// 성능 옵션 설정 (선택사항)
app.config.performance = process.env.NODE_ENV !== 'production'

// 애플리케이션 마운트
app.mount('#app')
