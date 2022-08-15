<template>
  <div>
<!--  第一种：放置字符串  -->
    <p style="color: red">hello</p>
<!--  第二种：放置对象 css property名可以用驼峰式（camelCase）或短横线分隔（kebab-case，记得用引号括起来） -->
    <p :style="{color: activeColor,fontSize:activeFontSize+'px'}">hello1</p>
<!--  直接绑定整个对象  -->
    <p :style="activeObject">hello2</p>

    <button @click="activeFontSize=100"></button>
    <p :style="change">hello3</p>
<!--  数组语法  -->
    <p :style="[activeObject,{border: '5px solid black'}]">hello4</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeColor: "red",
      activeFontSize:50,
      activeObject:{
        color:"blue",
        fontSize:"80px",
        'background-color':'red',
      }
    }
  },
  computed:{
    change:function () {

      return{
        color:"yellow",
        fontSize:this.activeFontSize+10+'px',
      }
    }
  }
}
</script>

<style>

</style>