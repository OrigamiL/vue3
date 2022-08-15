<template>
  <div>
<!--  CLass绑定：对象语法和数组语法  -->
<!--  第一种。放置字符串  -->
    <p class="active">Hello</p>
<!--  第二种，放置对象  -->
    <p :class="{active:isActive,negative:isNegative}">Hello</p>
    <button @click="isActive=!isActive;isNegative=!isNegative"></button>
<!--  和普通的类同时存在，不会冲突  -->
    <p class="active" :class="{negative:isNegative}">Hello</p>

    <p :class="classObj">Hello</p>
<!--  使用computed  -->
    <p :class="classObject">Hello</p>
<!--  数组语法 （不常用） -->
    <p :class="[activeClass,negativeClass]">Hello</p>
<!--  数组和对象结合  -->
    <p :class="[negativeClass,{active:isActive}]">Hello</p>
  </div>
</template>

<script>
export default {
  data:function (){
    return{
      message:"helloWorld",
      isActive:true,
      isNegative:false,
      error: {},
      activeClass:"active",
      negativeClass:"negative",
      classObj:{
        active:true,
        negative:false,
      }
    };
  },
  computed:{
    //方法简写: a:function(){}可以简写为a(){}
    classObject: function () {
      return {
        active:this.isActive && !this.error,
        negative:this.error
      }
    },
  }
};
</script>

<style>
  .active{
    font-size: 50px;
    color: #1a1a1a;
    font-style: oblique;
  }
  .negative{
    font-size: 60px;
    color: #66ccff;
    font-weight: bold;
  }
</style>