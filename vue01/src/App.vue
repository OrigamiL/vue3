<script>/*组合式api*/
//vue是声明式渲染，可以提高开发效率
export default {
  data(){
    return{
      num:0,
      uname:"张三",
      msg:"<h2>标题<h2>",
      id:"d1",
      url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F21031FKU44S6-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662879951&t=148a95c4d0e8bedda70dff883670c73b",
      attributeName:"id",
      mouseEvent:"click"
    }
  },
  methods:{//给vue定义方法
    changeUname(){
      this.uname = "李四"  //this指向该vue实例
    },
    changeColor(){
      if(this.id==="d1"){
        this.id="d2"
      }
      else {
        this.id="d1"
      }
    },
    changeAttributeName(){
      if(this.attributeName==="class"){
        this.attributeName="id"
      }
      else {
        this.attributeName="class"
      }
    },
    changeMouseEvent(){
      this.mouseEvent="mouseover"
    }
  },
};
</script>

<template>
  <div>
    <p>{{num}}</p>
    <p>{{uname}}</p>
<!--  v-html:让内容以html的形式显示  -->
    <p v-html="msg"></p>
<!--  v-once:当数据改变时，插值处的内容不会更新  -->
    <p v-once >{{uname}}</p>
    <button @click="changeUname">改变名字</button>
<!--  v-bind:动态绑定绑定属性的内容  -->
    <p v-bind:id="id">v-bind绑定</p>
    <img v-bind:src="url" alt=""/><br>
    <button @click="changeColor">改变颜色</button><br>
<!--  使用javascript表达式  -->
    <button @click="id==='d1'?id='d2':id='d1'">改变颜色</button><br>
    <p>{{num+1}}</p>
    <p>{{uname.split("").reverse().join("")}}</p>
    <p v-bind:id="id.substring(0,1)+2">v-bind绑定</p>
<!--  v-bind语法糖 直接:  -->
    <p :id="id.substring(0,1)+2">v-bind绑定</p>
<!--  v-on用于监听 DOM 事件  -->
    <button v-on:click="changeColor">改变颜色</button><br>
<!--  @就是v-on的语法糖  -->
    <button @click="changeColor">改变颜色</button><br>
<!--  动态参数  -->
<!--  动态属性  -->
    <p v-bind:[attributeName]="id">v-bind绑定</p>
    <button @click="changeAttributeName">改变属性</button><br>
<!--  动态事件  -->
    <button @[mouseEvent]="changeAttributeName">改变属性</button><br>
    <button @click="changeMouseEvent">改变事件</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#d1{
  color: red;
}
#d2{
  color: blue;
}
img{
  width: 200px;
  height: 200px;
}
.d1{
  color: yellow;
}
</style>
