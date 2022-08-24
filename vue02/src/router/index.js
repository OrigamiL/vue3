//从vue-router引入
import {createRouter, createWebHashHistory} from "vue-router";
//1。定义路由组件
//也可以从其他文件导入
/*const Home = { template: '<div>Home</div>>' }
const About = { template: '<div>About</div>'}*/
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import User from "../views/User.vue";
import NotFound from "../views/NotFound.vue";
import News from "../views/News.vue";
import Parent from "../views/Parent.vue";
import StyleOne from "../views/StyleOne.vue";
import StyleTwo from "../views/StyleTwo.vue";
import Page from "../views/Page.vue";
import ShopTop from "../views/ShopTop.vue";
import ShopMain from "../views/ShopMain.vue";
import ShopFooter from "../views/ShopFooter.vue";

//2.定义一些路由  路由映射表
//每个路由都需要映射到一个组件
//我们后面再讨论嵌套路由
const routes = [
    {
        path: "/",
        //重定向
        //redirect:'/home',
        //重命名路由
        //redirect:{name:"home"}
        //方法
        redirect:(to)=>{
            console.log(to)
            return {}
        }
    },
    {path: '/home', name:'home', component: Home},
    {path: '/about', component: About},
    //动态路由
    {path: '/user/:id', component: User},

    {
        //动态路由的参数一定要是数字
        //path: '/news/:id(\\d+)',
        //有多个参数
        //path: '/news/:id+',
        //参数可有可无，可多个
        //path: '/news/:id*',
        //参数0或者1个
        name:"news",//命名路由  用在声明式和编程式皆可
        path:'/news/:id?',
        component: News
    },
    {
        path: '/parent',
        component: Parent,
        children: [
            {
                path: "styleOne",// 注意没有 `/`
                component: StyleOne,
            },
            {
                path: "styleTwo",
                component: StyleTwo,
            }
        ]
    },
    // {path: '/parent/styleOne',component: StyleOne},
    // {path: '/parent/styleTwo',component: StyleTwo},
    //使用正则表达式 匹配任意路径 捕获所有404
    {path: '/page', component: Page},
    {
        path:'/shop',components:{
            default:ShopMain,
            ShopTop:ShopTop,
            ShopFooter:ShopFooter,
        }
    },
    {path: '/:path(.*)', component: NotFound},


]
//3.创建路由实例并传递`routes`配置
//你可以在这里输入更多的配置，但是我们在这里暂时保持简单
const router = createRouter({
    //4.内部提供了history模式的实现，为了简单起见，我们这里使用hash模式
    history: createWebHashHistory(),
    routes,//`routes:routes`的缩写
})
export default router;//默认导出