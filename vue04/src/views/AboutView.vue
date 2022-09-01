<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="changeCount(5)">按钮</button>
    <button @click="getHot">按钮2</button>
    <button @click="getAge">按钮3</button>
    <button @click="updateName">按钮4</button>
    <ul>
      <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
    <h2>==={{count}}</h2>
  </div>
</template>
<script setup>
  import {useStore} from "vuex";
  import {computed} from "vue";
  const store = useStore()
  const changeCount= (num)=> store.commit(
      'increment',
      {amount:num},
  )//使用store.commit方法改变state状态

  const getHot = ()=> {
    store.dispatch('getHot',{value:"啊这"});
  }
  const list = computed(()=>store.state.a.hotList)//解决响应式数据依赖响应式数据无响应问题 使用computed
  //因为list仅在第一次运行setup时进行初始化，因此它只会进行初始化，而不会更新。如果希望list在store.state.a.hotList更新时进行更新，
  //可以使其成为依赖于store.state.a.hotList的computed属性。
  const getAge = ()=> console.log(store.getters['b/userNameAge']);//使用了命名空间
  const updateName = ()=> store.commit('b/updateUserName')
  const count = computed(()=>store.state.a.count)

  // const storeStateFns = mapState(['name','username','count','msg','hotList'])
  // const storeState = {};
  // Object.keys((storeStateFns)).forEach(fnKey=>{
  //   const fn = storeStateFns[fnKey].bind({$store:store})
  //   storeState[fnKey] = computed(fn)
  // })

  //箭头函数
  /*
      ()=>{}              默认没有返回值，有需要返回则需要写 return
      ()=>无括号 和 ()=>() 默认返回       举例 ()=>({})  返回一个对象 需要外面的圆括号，不然变成上面的()=>{}
  * */
</script>
