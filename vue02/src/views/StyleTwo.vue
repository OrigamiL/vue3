<template>
  <div>
    <h2>样式2组件</h2>
    <ol>
      <li v-for="item in list">{{item}}</li>
    </ol>
  </div>
</template>

<script setup>
import {inject} from "vue";
const list = inject('list');
</script>

<style scoped>

</style>