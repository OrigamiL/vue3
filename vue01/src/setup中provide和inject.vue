<template>
  <div>
    <Content/>
  </div>
</template>

<script>
import Content from "./components/setup中provide和inject.vue";
import {provide, reactive, ref} from "vue";
export default {
  name: "App",
  components: {Content},
  data() {
    return {}
  },
  setup(){
    const name = ref('张三');
    const obj = reactive({
      name:"李四",
      age:18
    });
    provide('obj',obj)
    provide("name",name)

  }
}
</script>

<style scoped>

</style>