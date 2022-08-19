<template>
  <div>
    <button @click="message='11'">change</button>
    <h2>{{counter}}</h2>
    <button @click="changeCounter">改变counter</button>
    <h2>{{user}}</h2>
    <button @click="changeUser">改变user</button>
    <h2>{{reverseMessage}}</h2>
    <h2>user--{{reverseMsg}}</h2>
  </div>
</template>

<script>
import {ref, reactive, watch, watchEffect, computed, toRefs, onMounted, onBeforeMount, onUpdated, onBeforeUpdate} from "vue";

export default {
  name: "App",
  data() {
    return {
      message:"helloWorld",
    }
  },
  setup(){
    const counter=ref(0);
    function changeCounter() {
      counter.value++;
    }
    //侦听响应式数据
    watch(counter,(newValue,oldValue)=>{
      console.log('new---'+newValue);
      console.log('old---'+oldValue);
    });
  /*  watch(user,(newValue,oldValue)=>{
      console.log('new---'+newValue);
      console.log('old---'+oldValue);
    })*/
    //watchEffect(回调函数)注意不需要指定监听的属性，他会自动收集依赖。组件初始化的时候会执行一次回调函数
    const user=reactive({
      name:"张三",
      age:14,
      reverseMsg:computed(()=>{
        return msg.value.split('').reverse().join('');
      })
    });
    function changeUser(){
      user.name="李四";
      user.age=18;
    }
    //侦听响应式数据
    watchEffect(()=>{
      console.log(user.name)
      console.log(user.age)
    })
    //watch和watchEffect区别：
    //1。watchEffect不需要指定监听的属性，他会自动收集依赖，只要在回调中引用到了响应式的属性，只要这些属性发生改变，回调就会执行，
    //   watch只能侦听到指定的属性,做出回掉函数的执行，可侦听多个，vue3开始后
    //2，watch可以获取到新值和旧值，watchEffect获取不到
    //3.watchEffect在组件初始化的时候就会自动执行一次，用来收集依赖，watch不需要，一开始就指定了
    const msg=ref('helloWorld');
    /*const reverseMsg=computed(()=>{//会返回一个带有value属性的对象
      return msg.value.split('').reverse().join('');
    })*/
    //mounted
    onMounted(()=>{
      console.log('onMounted')
    })
    onBeforeMount(()=>{
      console.log("onBeforeMount")
    })
    onUpdated(()=>{
      console.log("onUpdated")
    })
    onBeforeUpdate(()=>{
      console.log("onBeforeUpdate")
    })
    return{
      user,counter,changeUser,changeCounter,msg,...toRefs(user)
    }
  },
  //选项式API
  watch:{
    message(newValue,oldValue){
      if(newValue!==oldValue){
        console.log("改了")
      }
    }
  },
  computed:{
    reverseMessage(){
      return this.message.split('').reverse().join("");
    }
  }
}
</script>

<style scoped>

</style>