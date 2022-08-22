<template>
  <div>
    <Content class="myContent" id="content" :message="message" @injectCounter="getCounter"></Content>
    <Content ref="content" @injectCounter="getCounter"></Content>
    <button @click="message='???'">按钮</button>
    <h2>---{{counter}}</h2>
  </div>
</template>

<script>
import Content from "./components/setup参数props和context.vue";
export default {
  name: "App",
  components: {Content},
  data() {
    return {
      message:"HelloWorld",
      counter:0,
    }
  },
  methods:{
    getCounter(value){
      this.counter=value;
      console.log(value)
    }
  },
  mounted() {
    console.log("打印"+this.$refs.content.counter);
    this.$refs.content.sendParent();
  }
}
</script>

<style scoped>

</style>