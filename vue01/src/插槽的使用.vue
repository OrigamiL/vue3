<template>
  <div>
    <button @click="change">按钮</button>
    <Content ref="myContent">
<!--   v-slot只能添加在<template>上   -->
<!--  父级模板里的所有内容都是在父级作用域中编译的 ；子模板里的所有内容都是在子作用域中编译的 ，所以模板中只能访问自身中的data  -->
      <template v-slot:button><button>按钮{{childMessage}}--{{message}}</button></template>
      <template v-slot:input><input type="text"></template>
      <template v-slot:h2><h2>标题</h2></template>
      <template v-slot:button1><button>改掉了</button></template>
    </Content><br><br>
    <Content><input type="text"></Content>
<!--  如果有多个值，同时放入组件进行替换时，一起作为替换元素  -->
    <Content><h2>我</h2><input type="text"></Content>
<!--  作用域插槽：父组件替换插槽的标签，数据由子组件提供  -->
<!--  无序列表展示子组件list  -->
    <Content>
      <template v-slot:default="slotProps"><!--slotProps接收的是包含所有插槽prop的对象-->
        {{slotProps.list}}
        <ul>
          <li v-for="item in slotProps.list" :key="item">{{item}}</li>
        </ul>
      </template>
    </Content>
<!--  有序列表展示子组件list  -->
    <Content>
      <template v-slot:default="slotProps">
        {{slotProps.list}}
        <ol>
          <li v-for="item in slotProps.list" :key="item">{{item}}</li>
        </ol>
      </template>
    </Content>
  </div>
</template>

<script>
import Content from "./components/插槽的使用.vue";
export default {
  name: "App",
  data() {
    return {
      message:"helloWorld",
      childMessage:"",
    }
  },

  methods:{
    change(){
      this.childMessage=this.$refs.myContent.message;
    }
  },
  components: {
    Content,
  },
}
</script>

<style scoped>

</style>