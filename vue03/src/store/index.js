//数据实现响应式
// ref定义字符串、数值;  reactive定义引用类型、对象
// 使用reactive定义一个响应式的对象
//如何在App组件中通过provide提供数据
import{reactive} from "vue";

const store = { //定义状态
    state:reactive({
        msg:"helloWord",
    }),
    updateMsg(){ //定义方法
       this.state.msg="你好";
    }
}
export default store //导出store
