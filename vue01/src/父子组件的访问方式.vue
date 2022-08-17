<template>
  <div>
    <Content></Content>
  </div>
</template>

<script>
import Content from "./components/父子组件的访问方式.vue";
export default {
  name: "App",
  data() {
    return {
      sex:1110,
    }
  },
  components:{
    Content,
  }
}
</script>

<style scoped>

</style>