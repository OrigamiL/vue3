<template>
  <div>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {}
  },
  props:{
    message:{
      type:String,
      default:"你好",
      required:false,
    }
  },
  setup(props){
    console.log(props)
    console.log(props.message);
  }
}
</script>

<style scoped>

</style>