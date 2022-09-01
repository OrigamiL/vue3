import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
//挂载了路由 use(router)之后，就会有$router
//挂载了store use(store)之后, 就会有$store
createApp(App).use(router).use(store).mount('#app')
