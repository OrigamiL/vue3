<template>
  <div>
<!--  第一种。放置字符串  -->
    <p class="active">Hello</p>
<!--  第二种，放置对象  -->
    <p :class="{active:isActive,negative:isNegative}">Hello</p>
    <button @click="isActive=false"></button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      message:"helloWorld",
      isActive:true,
      isNegative:true,
    };
  },
};
</script>

<style>
  .active{
    font-size: 50px;
    color: #1a1a1a;
  }
  p{
    font-size: 50px;
    color: #66ccff;
  }
</style>