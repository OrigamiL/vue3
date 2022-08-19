<template>
  <div>
    <Hello v-if="isShow"></Hello>
    <button @click="isShow=!isShow">按钮</button>
    <Hello v-show="isShow1"></Hello>
    <button @click="isShow1=!isShow1">按钮</button>
  </div>
</template>

<script>
import Hello from "./components/Hello生命周期.vue";
export default {
  name: "App",
  components: {Hello},
  data() {
    return {
      isShow:true,
      isShow1:true,
    }
  }
}
</script>

<style scoped>

</style>