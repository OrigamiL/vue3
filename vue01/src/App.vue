<template>
  <div>
    <Content><h2>我这</h2>><button>按钮</button></Content><br><br>
    <Content><input type="text"></Content>
  </div>
</template>

<script>
import Content from "./components/Content.vue";
export default {
  name: "App",
  data() {
    return {}
  },
  components: {
    Content,
  },
}
</script>

<style scoped>

</style>