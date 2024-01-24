import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ApiPlugin from './plugins/api'
import { store } from './store/index'
import router from './routers/router'

const app = createApp(App);

app.use(router)     // Подключаем Router Vue
app.use(store)      // Подкулючаем Vuex
app.use(ApiPlugin)  // Подключаем созданный плагин api
app.mount('#app');  // Монтируем приложение на DOM элемент