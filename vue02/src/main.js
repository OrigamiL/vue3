import { createApp } from 'vue'
/*import './style.css'*/
import App from './App.vue'
import router from './router' //引入。     router下面有index，不需要写，默认会找index
//5.创建并挂载根实例
const app = createApp(App)
app.use(router)
app.mount('#app')