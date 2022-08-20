<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="sendParent">发送数据</button>
  </div>
</template>

<script>
import {h, onUpdated, ref, toRefs, watchEffect} from "vue";

export default {
  name: "Content",
  data() {
    return {
      name:"张",
    }
  },
  props:{
    message:{
      type:String,
      default:"你好",
      required:false,
    }
  },
  setup(props,context){
    console.log(props)
    /*watchEffect(()=>{
      console.log(props.message)
    })*/
    const {message} = toRefs(props) //解构需要使用toRefs让其保持响应式
    onUpdated(()=>{
      console.log("message:"+message.value)
    });
    //Attribute(非响应式对象，等同于$attrs)   App中使用了<Content/>组件，其中定义的class  id 都可以通过attrs拿到
    console.log(context.attrs)
    //插槽（非响应式对象，等同于$slots）
    //console.log(context.slots)
    //触发事件(方法，等同于$emit)
    console.log(context.emit)
    const counter = ref(20);
    function sendParent() {
      context.emit("injectCounter",counter.value)
    }

    //暴露公共property（函数）
    //console.log(context.expose)
/*    return{
      sendParent,
    }*/
    context.expose({
      sendParent,counter
    })
    return ()=>h('div',counter.value)

  },
  mounted() {
    console.log(this.message)
  }
}
</script>

<style scoped>

</style>