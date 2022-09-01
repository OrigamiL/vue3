import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {//表示中转服务器
    proxy: {//通过代理实现跨域
      //https://i.maoyan.com
     '/path':{
       //target:'https://i.maoyan.com', //替换的服务端地址
         target:'https://static-data.gaokao.cn',
         changeOrigin: true, //开始代理，允许跨域请求数据
         rewrite:path => path.replace('/^\/path',''),
     }
    }
  }
})
