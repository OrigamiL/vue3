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
axios.get('http://localhost:5173/news').then((res)=>{
  console.log(res)
})

</script>

<style scoped>

</style>