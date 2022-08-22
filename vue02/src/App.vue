<script setup>
import {provide, ref} from "vue";
  const id = ref();
  const list=ref([1,2,3,4]);
  provide('list',list);
</script>

<template>
  <div>
<!--  vue-router是基于路由和组件的，路由是用来设定访问路径，将路径和组件映射起来  -->
    <h1>Hello App!</h1>
    <p>
<!--    使用router-link 组件进行导航  -->
<!--    通过传递`to`来指定链接  -->
<!--    `<router-link>` 将呈现一个带有正确`href`属性的 `<a>`标签 -->
<!--    使用一个自定义组件 router-link来创建链接，这使得Vue Router可以在不重新加载页面的情况下更改URL，处理URL的生成以及编码  -->
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
<!--      <router-link to="/user/1234">Go to User</router-link>-->
      <input v-model="id">
      <router-link :to="{path: '/user/'+id}">Go to User</router-link>
      <router-link :to="{path: '/news/'+id}">Go to News</router-link><br>
      <router-link to="/parent">Go to Parent</router-link>
    </p>
<!--  路由出口 占位符 -->
<!--  路由匹配到的组件将被渲染在这里  -->
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
