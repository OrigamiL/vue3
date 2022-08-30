<template>
  <div>
    <h3>{{}}---{{store.state.msg}}</h3>

  </div>
</template>

<script setup>
import {inject, ref} from "vue";
import axios from "axios";
//fetch 原生JS，是Http数据请求的一种方式
const store = inject("store");
/*let bannersList;
fetch('http://localhost:5173/news').then((res)=>{//默认执行get请求
  //json()将响应的body,解析成json的promise。
  //console.log(res.json())
  return res.json()
}).then((res)=>{
  console.log(res.list)
  bannersList = res.list
})*/
//axios:基于promise的http库
/*axios.get('/path/api/mmdb/movie/v3/list/hot.json?ct=%E6%BD%8D%E5%9D%8A&ci=224&channelId=4').then((res)=>{
  //跨域请求数据失败，是因为浏览器有同源策略的保护机制，我们可以通过proxy实现跨域请求数据
  console.log(res)
})*///https://static-data.gaokao.cn/www/2.0/school/120/info.json
axios.get('/path/www/2.0/school/120/info.json').then((res)=>{
  console.log(res)
})

</script>

<style scoped>

</style>