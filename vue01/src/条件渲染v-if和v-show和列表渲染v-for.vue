<template>
  <div>
<!--  v-if用于条件性地渲染一块内容，这块内容只会在指令的表达式返回true的时候被渲染  -->
    <p v-if="age>18">成年了</p>
    <p v-else-if="age===18">正好18</p>
    <p v-else>小朋友</p>
<!--  在template元素上使用 v-if 条件渲染分组  -->
    <template v-if="age>=12">
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
    </template>
<!--  v-show   -->
<!--  v-show会始终被的渲染并保留在DOM中，v-show只是简单地切换元素的（display） CSS property  -->
    <p v-show="sex==='man'">男生</p>
    <p v-show="sex==='woman'">女生</p>
<!--  v-show只是简单地切换元素的display CSS property，带有v-show的元素始终会被渲染并保留在DOM中，频繁切换状态使用v-show  -->
<!--  v-if后面为false时，对应的元素以及子元素都不会被渲染； 控制DOM元素的创建和销毁，运行时条件很少改变，或者一次性的，使用v-if -->
    <h2 v-if="isShow">标题1</h2>
    <h2 v-show="!isShow">标题2</h2>
<!--  v-for 指令基于一个数组来渲染一个列表  item in items -->
    <ul>
      <li v-for="item in person" :key="item">{{item.message}}</li>
    </ul>
    <ul>
<!--   v-for使用数组，item代表数组中的每一个元素，index表示数组元素的下标   -->
      <li v-for="(item,index) in person" :key="index">{{item.message}}-->{{index}}</li>
    </ul>
<!--  v-for遍历对象属性  -->
    <ul>
<!--   v-for使用对象，item表示键值，key表示键名  -->
      <li v-for="(item,key,index) of object">{{item}}-{{key}}-{{index}}</li>
    </ul>
<!--  为了给Vue一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素,所以需要加key 作为唯一标识  -->
    <ul>
      <li v-for="(item) in person" :key="item"><input type="checkbox" name="" id="">{{item.message}}</li>
    </ul>
    <button @click="addPerson"></button>
  </div>
</template>

<script>
export default {
  data:function () {
    return{
      age:12,
      sex:'man',
      isShow:false,
      person:[{message:'张三'},{message:'李四'},{message:'王五'}],
      object:{
        name:'张三',
        sex:"男",
        address:"北京",
        phone:15233655487,
      }
    }
  },
  methods:{
    addPerson(){
      this.person.unshift({message:'赵六'})
    }
  }
}
</script>

<style scoped>

</style>