import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'

const app = createApp(App);

//全局注册自定义指令
//app.directive('指令的名字','对象数据或者指令函数')
app.directive('focus',{//自定义指令要在app.mount('#app') 之前
    mounted(el){
        el.focus()
    }
})

app.mount('#app') //