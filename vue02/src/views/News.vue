<template>
  <div>
    <h2>News</h2>
    <button @click="id=10000">按钮</button>
    <h2>{{id}}</h2>
  </div>
</template>

<script>
export default {
  name: "New",
  data() {
    return {
      id: this.$route.params.id,
      age:18,
    }
  },
  beforeRouteEnter(to,from,next){//需要通过next回调函数拿到实例对象
    console.log(to)
    console.log(from)
    next((vm)=>{
      console.log(vm.age)
    })
    console.log('路由组件进入之前')
  },
  beforeRouteUpdate(){
    console.log("路由更新组件之前")
  },
  beforeRouteLeave(to,from,next){
    console.log(this.age)
    console.log("路由离开组件之前")
    next();
  }
}
</script>

<style scoped>

</style>