<template>
  <div>
<!--    <HelloHello :message="message"></HelloHello>-->
    <HelloHello :message="message"></HelloHello>
  </div>
</template>

<script>
import HelloHello from "./HelloHello.vue";
export default {
  name: "Content",
  components: {HelloHello},
  data() {
    return {}
  },
/*  props:{
    message:{
      type:String,
    }
  }*/
}
</script>

<style scoped>

</style>