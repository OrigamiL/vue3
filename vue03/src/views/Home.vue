<template>
  <div>
    <h2>{{store.state.msg}}</h2>
    <button @click="updateMsg">按钮Home</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {}
  },
  inject:['store'],
  methods:{
    updateMsg(){
      this.store.updateMsg();
    }
  },
  mounted() {
    console.log(this.store.state.msg)
  },

}
</script>

<style scoped>

</style>