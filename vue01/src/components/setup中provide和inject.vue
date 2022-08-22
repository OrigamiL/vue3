<template>
  <div>
    <h2>{{name}}</h2>
    <h2>{{obj.name}}</h2>
    <button @click="name='zhangSan'">按钮</button>
    <button @click="obj.name='王五'">按钮2</button>
    <button @click="changeName">按钮3</button>
  </div>
</template>

<script>
import {inject} from "vue";

export default {
  name: "Content",
  data() {
    return {}
  },
  setup(){
    const name = inject('name');
    const obj = inject('obj');
    function changeName() {
      name.value='赵六'
    }
    return{
      name,obj,changeName
    }
  }
}
</script>

<style scoped>

</style>