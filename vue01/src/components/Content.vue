<template>
  <div>
    <div>
      <slot></slot>
    </div>
    <h2>我是Content组建内容</h2>
    <div>
      <slot></slot><!--占位-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>