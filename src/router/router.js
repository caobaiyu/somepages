import Vue from 'vue';
import Router from 'vue-router';
import {getStore} from '../components/utils/mty.js'

Vue.use(Router);

// 官方的懒加载方案，需要在webpack.config.js中配置@babel/plugin-syntax-dynamic-import这个插件，否则babel不支持以下语法会报错。
// 下面的注释语法是打包生成的js的文件名，如果你想某几个组件打包到同一个文件，那么它们的注释语法的webpackChunkName的名字相同即可
const Login = () =>
  import('../login/index.vue');

const routes = [
	{path: "/" ,redirect:"/login"},
	{path: "/login" ,component: Login},
]

const router = new Router({
  routes,
})

router.beforeEach((to , form , next)=>{
	//to: Route: 即将要进入的目标 路由对象	
	//from: Route: 当前导航正要离开的路由
	//next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
	if(to.path === "/login") return next()

	const tokenStr = getStore("token");
	
	if(!tokenStr) return next('/login')
	
	next()

})

export default router ;
