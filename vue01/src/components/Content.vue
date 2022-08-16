<template>
  <div>
    <Hello></Hello>
    <h2>我是content组件内容</h2>
    <div id="myDiv"><Hello></Hello></div>
  </div>
</template>

<script>
import Hello from "./Hello.vue";
export default {
  name: "Content",
  data() {
    return {

    }
  },
  components:{
    Hello,
  }
}
</script>

<style>
 #myDiv{
   position:relative;
   left: -300px;
 }
</style>