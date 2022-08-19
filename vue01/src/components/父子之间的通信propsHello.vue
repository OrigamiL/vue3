<template>
  <div>
    <h2>我是Hello组件内容，子组件</h2>
    <h2>子组件中的msg：{{message}}=={{aaa}}==={{counter}}</h2>
    <h2>{{list}}</h2>
    <button @click="message='world'">子组件按钮</button>
  </div>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      counter:this.message,
      a:10,
    }
  },
  mounted() {
    console.log(this.$parent.msg);
    console.log(this.$root.sex)
  },
  //props:['message','aaa'],
  props:{
    //1.类型的限制
    //message:String,
    //2.除了类型限制，还可以设置默认值
    message:{
      type:String,
      default:'你好',
      required:true,//表示必传
    },
    list:{//对象或数组的默认值必须从一个工厂函数返回
      type:Array,
      default(){
        return [];
      }
      //required: true,
    },
    aaa:Number,
  }
}
</script>

<style scoped>

</style>