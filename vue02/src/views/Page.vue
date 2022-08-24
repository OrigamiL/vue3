<template>
  <div>
    <input v-model="id">
    <button @click="goPage">跳转页面</button>
  </div>
</template>

<script setup>
/*export default {
  name: "Page",
  data() {
    return {}
  },
  methods:{
    goPage(){
      this.$router.push('/');
      this.$router.push({path:'/'})
      console.log(this.$router);
    }
  }
}*/
import {useRouter} from "vue-router";
import {ref} from "vue";
const id = ref(0);
const router = useRouter()
const goPage=()=>{
  if(123===123)
    {
      //router.push('/');
      //通过传入对象
      //router.push({path:'/'});
      //带参数
      //router.push({path: '/user/'+id.value});
      //router.push({name:"news",params:{id:123}})
      //带问号
      router.push({path:"about",query:{id:id.value}}) //news?id=123
      //替换当前位置
      //router.replace('/')
      //router.push({path:"/",replace:true})

    }
}
//const goPage2=()=>useRouter().back();//这样写是错的

</script>

<style scoped>

</style>