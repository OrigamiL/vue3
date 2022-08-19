<template>
  <div>
    <h2>Hello组件展示</h2>
    <h2>{{counter}}</h2>
    <button @click="counter++">更新</button>
  </div>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      counter:0,
    }
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {//当页面发生改变时会执行beforeUpdate和updated
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  }
}
</script>

<style scoped>

</style>