<template>
  <div>
    <h2>About+{{id}}</h2>
    <button @click="back">后退</button>
  </div>
</template>

<script setup>
/*export default {
  name: "About",
  data() {
    return {}
  },
  mounted() {
    console.log(this.$route.query.id);
  }
}*/
import {useRoute, useRouter} from "vue-router";
import {onMounted, onUpdated, ref, watch} from "vue";
const router = useRouter()
const id = useRoute().query.id;
const back=()=>router.go(-1);//前进，传入为正值 ；后退，传入为负值
//go(-1) 相当于 router.back()      后退
//go(1)  相当于 router.forward()   前进
</script>

<style scoped>

</style>