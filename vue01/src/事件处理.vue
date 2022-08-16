<template>
  <div>
<!--  绑定事件，直接通过js代码处理  -->
    <h2 @click="counter++">{{counter}}</h2>
<!--  绑定事件，没有传递参数  -->
    <h2 @click="addCounter">{{counter}}</h2>
<!--  绑定事件，传递参数，可以传递多个  -->
    <h2 @click="addCounter(10)">{{counter}}</h2>
<!--  绑定事件，既传递参数，又想要事件对象  -->
    <h2 @click="addCounter(10,$event)">{{counter}}</h2>
<!--  一个事件，绑定多个处理函数  -->
    <h2 @click="addCounter(5,$event);addAge($event)">{{counter}}---{{age}}</h2>
<!--  事件修饰符  -->
<!--  .stop 阻止事件冒泡  -->
    <div @click="divClick">
      <button @click.stop="buttonClick">按钮</button>
    </div>
<!--  .prevent 阻止默认行为  -->
    <form action="" >
      <input type="submit" value="提交" @click.prevent="submitClick">
    </form>
<!--  .once 只触发一次回调  -->
    <button @click.once="onceClick">按钮</button>
<!--  按键修饰符  -->
<!--  按键别名：
    .enter  .tab  .delete(删除和退格)  .ese  .space  .up  .down  .left  .right
  -->
<!--  .{keyCode(键盘编码) | keyAlias(键盘别名)} 监听键盘按键 -->
    <input type="text" @keyup.enter="keyUp">

  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      counter:0,
      age:18,
    }
  },
  methods:{
    addCounter(newValue,e){
      console.log(e);
      if(typeof newValue === 'number'){
        this.counter+=newValue;
      }
      else
        this.counter++;
    },
    addAge(){
      this.age++;
    },
    divClick(){
      console.log("父元素展示");
    },
    buttonClick(){
      console.log("子元素展示");
    },
    submitClick(){
      console.log("提交");
    },
    onceClick(){
      console.log("只触发一次");
    },
    keyUp(){
      console.log("enter键keyUp");
    }
  },
}
</script>

<style>

</style>