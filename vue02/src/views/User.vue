<template>
  <div>
    <h2>用户+{{$route.params.id}}</h2>
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