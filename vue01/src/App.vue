<template>
  <div>
    <Content :message="message"></Content>
    <button @click="message='???'">按钮</button>
  </div>
</template>

<script>
import Content from "./components/Content.vue";
export default {
  name: "App",
  components: {Content},
  data() {
    return {
      message:"HelloWorld",
    }
  }
}
</script>

<style scoped>

</style>