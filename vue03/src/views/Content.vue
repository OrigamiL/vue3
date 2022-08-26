<template>
  <div>
    <button @click="updateMsg">Content按钮</button>
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  name: "Content",
  data() {
    return {

    }
  },
  inject:['store'],
  methods:{
    updateMsg(){
      this.store.updateMsg();
      console.log(this.store.state.msg)
    }
  }
}
</script>

<style scoped>

</style>