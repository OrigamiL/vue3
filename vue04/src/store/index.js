import {createStore} from "vuex";
import axios from "axios";
import user from "@/store/user/index"

const moduleA = {
    state:()=>({
        count:0,
        msg:'helloWorld',
        hotList:[],
    }),
    getters:{//可以认为是store的computed
        reverseMsg:(state)=>{
            return state.msg.split("").reverse().join("")
        },
        reverseMsgLength:(state, getters)=>{//getters代表当前store中的getters对象
            return getters.reverseMsg.length//获得reverseMsg方法中返回值的长度
        }
    },
    mutations:{//通过store.commit方法触发对应函数 状态变更 mutation是一个同步函数
        increment(state,payload){//state表示上面state返回的对象,
            state.count+=payload.amount;
        },
        updateHotList(state,payload){
            state.hotList=payload.value
            console.log(payload)//如果打印“payload”+payload 会显示[Object object] 去掉+和之前的字符串
        }
    },
    actions:{//异步操作 Action提交的是mutation，而不是直接变更状态 Action可以包含任意异步操作
        //https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E6%BD%8D%E5%9D%8A&ci=224&channelId=4
        getHot(context,payload){//context是一个对象，这个对象跟store实例具有相同的属性和方法的对象
            /*fetch("/path/api/mmdb/movie/v3/list/hot.json?ct=%E6%BD%8D%E5%9D%8A&ci=224&channelId=4")
                .then((res)=>{
                    console.log(res.json());
                    console.log(context)
            })*/
            axios.get('/path/api/mmdb/movie/v3/list/hot.json?ct=%E6%BD%8D%E5%9D%8A&ci=224&channelId=4').then((res)=>{
                console.log(res.data.data.hot)
                //context.state.hotList=res.data.data.hot;不这样写 ，需action进行commit操作 然后使用dispatch调用getHot
                context.commit('updateHotList',{value:res.data.data.hot})
                console.log(context)
                console.log(payload)
            })
        }
    },
}

//创建store实例
const store = createStore({
    state:()=>({
       name:"zhangSan",
    }),
    modules:{
        a:moduleA,
        b:user,
    }
    // state:function (){//存储单一状态，存储基本数据
    //     return{
    //         count:0,
    //         msg:'helloWorld',
    //         hotList:[],
    //     }
    // },
    //如果state的状态需要过滤或者需要其他操作，放在getters中
    // getters:{//可以认为是store的computed
    //     reverseMsg:(state)=>{
    //         return state.msg.split("").reverse().join("")
    //     },
    //     reverseMsgLength:(state, getters)=>{//getters代表当前store中的getters对象
    //         return getters.reverseMsg.length//获得reverseMsg方法中返回值的长度
    //     }
    // },
    // mutations:{//通过store.commit方法触发对应函数 状态变更 mutation是一个同步函数
    //     increment(state,payload){//state表示上面state返回的对象,
    //         state.count+=payload.amount;
    //     },
    //     updateHotList(state,payload){
    //         state.hotList=payload.value
    //         console.log(payload)//如果打印“payload”+payload 会显示[Object object] 去掉+和之前的字符串
    //     }
    // },
    // actions:{//异步操作 Action提交的是mutation，而不是直接变更状态 Action可以包含任意异步操作
    //     //https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E6%BD%8D%E5%9D%8A&ci=224&channelId=4
    //     getHot(context,payload){//context是一个对象，这个对象跟store实例具有相同的属性和方法的对象
    //         /*fetch("/path/api/mmdb/movie/v3/list/hot.json?ct=%E6%BD%8D%E5%9D%8A&ci=224&channelId=4")
    //             .then((res)=>{
    //                 console.log(res.json());
    //                 console.log(context)
    //         })*/
    //         axios.get('/path/api/mmdb/movie/v3/list/hot.json?ct=%E6%BD%8D%E5%9D%8A&ci=224&channelId=4').then((res)=>{
    //             console.log(res.data.data.hot)
    //             //context.state.hotList=res.data.data.hot;不这样写 ，需action进行commit操作 然后使用dispatch调用getHot
    //             context.commit('updateHotList',{value:res.data.data.hot})
    //             console.log(context)
    //             console.log(payload)
    //         })
    //     }
    // },

})
export default store
