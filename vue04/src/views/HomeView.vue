<template>
  <div class="home">
    <h2>==={{$store.state.count}}</h2>  <!--vue2写法-->
    <h2>{{store.state.count}}</h2> <!--vue3写法-->
    <h2>{{store.getters.reverseMsg}}</h2>
    <h2>{{store.getters.reverseMsgLength}}</h2>
  </div>
</template>

<script setup>
// @ is an alias to /src
import {useStore} from "vuex";
const store = useStore()
</script>
