<template>
  <div>
    <h2>样式1组件</h2>
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</template>

<script setup>
 import {inject} from "vue";
 const list = inject('list');
</script>

<style scoped>

</style>