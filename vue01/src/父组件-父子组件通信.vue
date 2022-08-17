<template>
  <div>
    <h2>{{memo}}</h2>
    <Content @getMsg="getChildMsg"></Content><br><br>
    <Content></Content><br><br>
    <Content></Content><br><br>
<!--  拿到子组件Content的数据，通过自定义事件  -->
<!--  2.在父组件中，通过v-on监听子组件中自定义的事件  -->
  </div>
</template>

<script>
import Content from "./components/父子组件的通信-props-自定义事件.vue";

export default {
  name: "App",
  data() {
    return {
      number:12,
      memo:'',
    }
  },
  methods:{
    getChildMsg(value){
      this.memo=value
    }
  },
  components:{
    Content,
  }
}
</script>

<style scoped>

</style>