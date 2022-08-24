<template>
  <div>
<!--  获取参数  -->
<!--  $router是VueRouter的一个实例，他包含了所有的路由，是用来操作路由的,push,forward,go方法
      $route代表当前活跃的路由对象，是用来获取路由信息的  -->
    <h2>用户+{{$route.params.id}}</h2>
    <h2>{{useRoute().params.id}}</h2>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";

console.log(useRoute().params.id)
/*export default {
  name: "User",
  data() {
    return {}
  },
  mounted() {
    //当前活跃的路由对象
    console.log(this.$route.params.id)
  }
}*/
</script>

<style scoped>

</style>