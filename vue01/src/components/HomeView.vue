<template>
  <div>
<!--    <Content :message="message"></Content>-->
    <Content></Content>
    <button @click="obj.message='你好'">改变obj.msg</button>
    <button @click="message='你好啊'">改变message</button>
  </div>
</template>

<script>
import Content from "./Content.vue";
export default {
  name: "HomeView",
  components: {Content},
  data() {
    return {
      message:"HelloWorld",
      obj:{
        message:"HelloWorld",
      }
    }
  },
  //provide跟inject默认情况下并不是响应式的，改变父组件的值，子组件的值不会改变
  //provide:{msg:"HelloWorld"},
  provide(){
    return {
       // msg:this.message,
       //obj:this.obj,  //响应式对象方式   传入对象时 是浅拷贝  传地址
       // message:()=>this.message//函数返回响应式数据
      message:() => this.message,
    }
  }
}
</script>

<style scoped>

</style>