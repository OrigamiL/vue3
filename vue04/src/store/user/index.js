const user = {
    namespaced:true,
    state:()=>({
        username:'张三',
    }),
    getters: {
        userNameAge(state,getters,rootState){
            console.log(getters)
            console.log(rootState)//第三个参数获取根节点state状态
            return state.username+",18"
        },
    },
    mutations: {
        updateUserName(state){
            return state.username = '李四'
        }
    },
}
export default user