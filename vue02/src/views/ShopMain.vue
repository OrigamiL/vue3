<template>
  <div>
    <h2>shop主要内容==={{content}}</h2>
  </div>
</template>

<script>
export default {
  name: "ShopMain",
  data() {
    return {

    }
  },
  props:['content'],
  updated() {
    console.log(this.content);
  }
}
</script>

<style scoped>

</style>