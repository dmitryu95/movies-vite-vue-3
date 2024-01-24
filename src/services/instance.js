import axios from 'axios';
import { store } from '../store/index.js'
import { watchEffect } from 'vue';

const instance = axios.create({
  baseURL: 'https://kinopoiskapiunofficial.tech/api/',
  //withCredentials: true,
  headers: {
    'Content-Type': 'application/json',    
  }
});

// Установить введенный ключ
watchEffect(() => {
    const key = localStorage.getItem('authKey');

    if (key) {
      console.log(`${key}`)
      instance.defaults.headers.common['X-API-KEY'] = key;
    }
})

export default instance;