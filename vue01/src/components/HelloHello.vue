<template>
  <div>
    <h2>我是HelloHello组件</h2>
<!--    <p>&#45;&#45;&#45;&#45;{{obj.message}}</p>-->
    <p>----{{newMsg}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloHello",
  data() {
    return {

    }
  },
/*  props:{
    message:{
      type:String,
    }
  },*/
  inject:['message','obj'],
//  inject:['obj'],
  computed:{
    newMsg(){
      return this.message();
    }
  }
}
</script>

<style scoped>

</style>