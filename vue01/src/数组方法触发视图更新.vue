<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
    <button @click="changeList">改变数组</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      list:[1,3,5,7,8,2,4]
    };
  },
  methods:{
    changeList(){
      //通过索引值去修改数组，vue2不可以实现视图更新,vue3是可以的
      //this.list[7]=7;
      // push();给数组末尾添加元素，可以添加多个
      //this.list.push(10,8,7,6);
      // pop();删除数组最末尾的元素
      //this.list.pop();
      // shift();给数组的第一位进行删除
      //this.list.shift();
      // unshift();给数组首位添加元素，可以添加多个
      //this.list.unshift(0);
      // splice();删除元素 插入元素 替换元素
      //第一个参数：表示开始插入或者开始删除的元素的位置下标
      //删除元素
      //第二个参数：表示传入要删除几个元素（如果没有传，就会删除后面所有的元素）
      //this.list.splice(1,2)//从数组下标1开始删除。删除两个
      //this.list.splice(2)//从数组下标2开始，删除后面所有的元素
      //插入元素
      //第二个参数：传入0
      //第三个参数：要插入的值，可以多个
      //this.list.splice(2,0,10,20)
      //替换元素(删除再插入)
      //第二个参数：表示替换几个元素
      //第三个参数：要替换的值
      //this.list.splice(2,2,0,0)
      // sort();排序
      //this.list.sort();//从小到大
      //this.list.sort().reverse();//从大到小
      // reverse();翻转
      //this.list.reverse();
    }
  }
}
</script>

<style>

</style>