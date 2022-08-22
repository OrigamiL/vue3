<template>
  <Content></Content>
  <Content></Content>
  <h2>{{a}}</h2>
  <h2>{{b}}</h2>
  <h2>{{c}}</h2>
  <button @click="changeB">改变b</button>
  <input v-model="c">
  <button @click="changeA">改变a</button>
  <h2>{{capitalize('hello')}}</h2>
</template>

<script setup>//顶层的绑定会把他们暴露给模板
//定义响应式变量，还是需要从vue中引入ref
import {onUpdated, ref, capitalize} from 'vue'
//引入组件，不需要注册
import Content from "./components/Content.vue";
//定义变量在模板中使用不需要暴露出去 return{}，模板直接使用
let a = ref(20);
console.log(a);
const b = ref(10);
console.log(b);
let c = ref(0);
function changeB() {
  b.value++
}
function changeA() {
  a.value=c.value
}
onUpdated(()=>{
  console.log(c.value)
  console.log(a.value)
})
</script>

<style scoped>

</style>