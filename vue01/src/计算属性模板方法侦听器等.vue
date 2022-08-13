<script>/*组合式api*/
//vue是声明式渲染，可以提高开发效率
export default {
  data:function (){
    return{
      num:0,
      uname:"张三",
      msg:"<h2>标题<h2>",
      id:"d1",
      url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F21031FKU44S6-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662879951&t=148a95c4d0e8bedda70dff883670c73b",
      attributeName:"id",
      mouseEvent:"click",
      message: "HelloWorld!",
      user:{
        name:"张三",
        age:18,
        sex:'男',
      },
    };
  },
  computed:{//计算属性，只要依赖值不变，那么不会重新计算，计算属性将基于他们的响应依赖关系缓存，提高性能
    /*reverseMsg:function (){  //默认是get，简写方式
      return this.message.split('').reverse().join('')
    }*/
    //完整写法
    //计算属性一般没有set方法，直接写简写；计算属性是只读属性
    reverseMsg:{
      set:function (newValue) {//在设置或者更改计算属性的时候调用
        console.log(newValue)
        this.message=newValue
      },
      get:function () {
        return this.message.split('').reverse().join('')
      },

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
    },
    reverseMessage(){
      return this.message.split('').reverse().join('')
    }
  },
  watch:{//监听变化
    //每当message发生变化时，就会调用这个函数
    /*message:function (newValue,oldValue) {
      console.log(newValue);
      console.log(oldValue);
      if (newValue!==oldValue){
        this.num++
      }
      if (newValue.length<5 || newValue.length>10){
        console.log('输入框中的内容不能小于5或者大于10');
      }
    }*/
    message:{
      immediate:true,//初始化的时候调用函数
      handler:function (newValue) {
        if (newValue.length<5 || newValue.length>10){
          console.log('输入框中的内容不能小于5或者大于10');
        }
      }
    },
    //监听不到对象中的属性变化,需要使用深度监听
    /*user:function (newValue) {
      console.log(newValue)
    }*/
    /*user:{
      handler:function (newValue) {
        console.log(newValue)
      },
      deep:true,//表示是否深度监听,侦听器会一层层的向下遍历，给对象的每一个属性都加上侦听器
    },*/
    "user.name":{//使用字符串的形式进行优化，只会单独监听对象中对应的属性
      deep:true,
      handler:function (newValue) {
        console.log(newValue);
      }
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
<!--  翻转信息  -->
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
    <button @click="changeMouseEvent">改变事件</button><br>
<!--  第一种使用js表达式  -->
    <p>{{message.split('').reverse().join('')}}</p>
<!--  第二种使用计算属性  -->
    <p>{{reverseMsg}}</p>
    <button @click="reverseMsg='hello'">reverse改变</button>
<!--  第三种使用methods中的方法  -->
    <p>{{reverseMessage()}}</p>
<!--  监听器  -->
    <p>{{message}}</p>
    <button @click="message='你好'">改变message</button>
<!--  v-model数据的双向绑定  -->
    <input type="text" v-model="message">
    <p>{{user.name}}</p>
    <button @click="user.name='李四'">改变名字</button>
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
