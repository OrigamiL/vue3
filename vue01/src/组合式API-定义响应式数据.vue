<template>
  <div>
    <button @click="changeMsg()">改变Msg</button>
    <h2>{{msg}}</h2>
    <button @click="changeCounter">改变Counter</button>
    <h2>{{counter}}</h2><!--模板会自动解析value值 不需要.value-->
    <input type="text" v-model="n">
    <input type="text" v-model="a">
    <button @click="changeObj(n,a)">改变obj</button>
    <h2>{{obj.name}}</h2>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <h2>{{children.name}}</h2>
  </div>
</template>

<script>
import {ref,reactive,toRefs} from 'vue';
export default {
  data() {
    return {
      n:"zhang",
      a:"33",
    }
  },
  //组合式API:将同一个逻辑关注点相关代码收集在一起
  setup(){//组件创建之前被执行   setup是围绕beforeCreate和created生命周期钩子运行的，所以不需要显式地定义它们
    //不要使用this， this不会指向实例 setup的调用发生在data property ，computed property ，methods被解析之前， 所以他们无法在setup中被获取
    //没有响应式
    console.log('setup');
    let msg="hello";
    console.log(msg);
    function changeMsg() {
      msg='你好';
      console.log(msg);//数据不是响应式的
    }
    //通过ref定义响应式变量
    const counter = ref(0);//ref()返回带有value属性的对象
    function changeCounter() {
      counter.value++;
    }
    //通过reactive定义引用类型的数据
    const obj=reactive({
      name:'张三',
      age:15,
      children:{
        name:"小张",
      }
    })
    function changeObj(name,age) {
      obj.name=name;
      obj.age=age;
    }
    //通过ES6拓展运算符进行解构使得对象中的属性不是响应式的
    //toRefs(object)使解构后的数据重新获得响应式
    return{
      msg,changeMsg,counter,changeCounter,obj,changeObj,...toRefs(obj),
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
}
</script>

<style scoped>

</style>