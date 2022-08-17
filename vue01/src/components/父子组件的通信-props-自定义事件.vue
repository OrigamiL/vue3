<template>
  <div>
    <Hello :message="msg" :list="list" aaa="123"></Hello>
    <h2>我是content组件内容，父组件</h2>
    <h2>{{msg}}</h2>
    <button @click="msg='Hello'">按钮</button>
    <Hello message=""></Hello>
    <button @click="sendMsgToParent">提交数据给父组件</button>
  </div>
</template>

<script>
import Hello from "./Hello.vue";
export default {
  name: "Content",
  data() {//定义为函数，返回对象，是为了让每一个组件对象都返回一个新的对象，不会造成数据污染
    return {
      msg:"HelloWorld!",
      list:[1,2,3,4],
    }
  },
  methods:{
    //1.在子组件中，通过$emit来触发事件
    sendMsgToParent(){
      //this.$emit('自定义事件的名称','发送的事件参数')
      this.$emit('getMsg',this.msg);
    }
  },
  components:{//单向数据流，父组件改变，子组件值改变，子组件不会改变父组件的值
    Hello,
  }
}
</script>

<style>
/* #myDiv{
   position:relative;
   left: -300px;
 }*/
</style>