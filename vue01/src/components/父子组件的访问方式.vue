<template>
  <div>
<!--  父子组件的访问方式  -->
<!--  父组件访问子组件：$refs  --><!--$children(废弃) -->
<!--  子组件访问父组件：$parent  -->
<!--  子组件访问根组件：$root  -->
    <Hello :message="msg" aaa="1234" :list="list" ref="hello"></Hello>
    <p ref="p" id="myP"></p>
  </div>
</template>

<script>
import Hello from "./父子之间的通信propsHello.vue";
export default {
  name: "Content",
  data() {
    return {
      msg:"HelloWorld",
      list:[1,2,4,5],
    }
  },
  mounted() {
    console.log(this.$refs.hello.a);
  },
  components:{
    Hello,
  }
}
</script>

<style scoped>

</style>