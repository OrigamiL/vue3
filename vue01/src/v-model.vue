<template>
  <div>
<!--  v-model基本使用  -->
    <input type="text" v-model="msg">
    <h2>{{msg}}</h2>
    <button @click="msg='okkkk'">按钮</button><br><br>

<!--  v-model的原理  -->
<!--  本质是两个操作：1.v-bind绑定一个value属性  2.v-on给当前元素添加一个input事件  -->
    <input type="text" :value="msg" @input="changeMsg"><br><br>
<!--  表单控件中使用v-model  -->
<!--  复选框中使用  1.单个勾选框 v-model为布尔值 -->
    <input type="checkbox" v-model="checked" >点击<br>
    <p>{{checked}}</p>
<!--  2.多个勾选框  -->
    <input type="checkbox" v-model="fruits" value="apple">苹果
    <input type="checkbox" v-model="fruits" value="banana">香蕉
    <input type="checkbox" v-model="fruits" value="grape">葡萄
    <input type="checkbox" v-model="fruits" value="peach">桃子
    <input type="checkbox" v-model="fruits" value="pear">雪梨
    <p>喜欢的水果：{{fruits}}</p>
<!--  单选框  v-model加完就不需要name 也可二选一  -->
    <input type="radio" v-model="sex" value="男">男
    <input type="radio" v-model="sex" value="女">女
    <p>{{sex}}</p>
<!--  选项框  -->
<!--  单选  -->
    <select v-model="city">
      <option value="北京" >北京</option>
      <option value="上海" >上海</option>
      <option value="广州" >广州</option>
      <option value="重庆" >重庆</option>
    </select>
    <h2>{{city}}</h2>
<!--  多选  -->
    <select  multiple v-model="cities">
      <option value="北京" >北京</option>
      <option value="上海" >上海</option>
      <option value="广州" >广州</option>
      <option value="重庆" >重庆</option>
    </select>
    <h2>{{cities}}</h2>
<!--  v-model修饰符  -->
<!--  .lazy：将input转为change  -->
    <input type="text" v-model.lazy="msg">
    <h2>{{msg}}</h2>
<!--  .number：将输入框中的内容自动转为数字类型  -->
    <input type="number" v-model.number="counter">
    <h2>{{typeof counter}}</h2>
<!--  .trim: 去除首尾空白 -->
    <input type="text" v-model.trim="msg" @keydown="downMsg">
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:"HelloWorld!",
      checked:"",
      fruits:[],
      sex:"",
      city:"",
      cities:[],
      counter:0,
    }
  },
  methods:{
    changeMsg(e){
      this.msg=e.target.value
    },
    downMsg(){
      console.log(this.msg);
    }
  }
}
</script>

<style scoped>

</style>