<script>
//vue3 如何设置状态管理
//provide/inject 跨级通信
import store from "./store";
import {provide} from "vue";
import Home from "./views/Home.vue";
import Content from "./views/Content.vue";
import Hello from "./views/Hello.vue";
export default {
  provide:{
    store
  },
  components:{
    Content,
    Home,
    Hello,
  },
}
</script>

<template>
  <div>
    <Home/>
    <Content/>
    <Hello/>
  </div>
</template>


<style scoped>

</style>
