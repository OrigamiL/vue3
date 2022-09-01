<script>
//vue3 如何设置状态管理
//provide/inject 跨级通信
import store from "./store";
import {provide} from "vue";
import Home from "./views/Home.vue";
import Content from "./views/Content.vue";
import Hello from "./views/Hello.vue";
export default {
  data:()=>({
    msg:"你好",
    msg1:""
  }),
  provide:{
    store
  },
  components:{
    Content,
    Home,
    Hello,
  },

  //局部注册 自定义指令
  directives:{//自定义指令，不需要写v-  使用的时候需要添加v-
  /*  focus:{
      mounted (el,){//表示被绑定的元素插入父节点的时候调用
        //el表示指令绑定的元素
        //binding：对象，属性name:指令名，value:指令绑定值
        el.focus()//获取焦点

      }
    }*/
  }
}
</script>
<!--
      $nextTick 将回调函数延迟到下一次dom更新数据之后调用
      vue是异步渲染的框架，数据更新之后，dom不会立刻渲染，$nextTick会在dom渲染之后被触发，用来获取最新的dom节点
      使用场景：
      1.在生命周期函数created中进行dom操作，一定要放到nextTick函数中执行
      2.在数据变化后要执行某个操作，而这个操作需要使用随数据变化而变化的dom结构时，这个操作需要放到nextTick中

-->
<template>
  <div>
<!--  局部注册  -->
    <input type="text">
    <input type="text" v-focus>
    <h2>{{msg}}</h2>
    <h2>{{msg1}}</h2>
    <Home/>
    <Content/>
    <Hello/>
  </div>
</template>


<style scoped>

</style>
