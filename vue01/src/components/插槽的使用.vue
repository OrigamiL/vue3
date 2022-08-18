<template>
  <div>
    <h2>我是Content组件内容</h2>
    <div>
      <slot name="button1"><button>默认按钮</button></slot><!--备用内容，会在没有提供内容的时候被渲染-->
      <slot name="button"></slot> <!--占位-->
      <slot name="input"></slot>
      <h3>Content内容</h3>
      <slot name="h2"></slot>
      <slot :list="list" :message="message"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      message:"你好",
      list:[1,2,34,5,10],
    }
  }
}
</script>

<style scoped>

</style>