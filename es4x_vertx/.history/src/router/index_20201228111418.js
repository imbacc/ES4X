// const router = require('koa-router')()
const vertxRouterClass = require('./vertxRouterClass.js')

module.exports = (vertx) => {

    const list = [
        require('./module/user')(koa),		//用户模块路由
        require('./module/version')(koa),	//授权模块路由
    ]
	
	console.time('生产路由')
	list.forEach((info)=> info.map((module)=> new vertxRouterClass(module,router)))  //循环子模块路由配置 生产路由
	console.timeEnd('生产路由')
	
	// koa.use(router.routes()).use(router.allowedMethods())
	
	console.log(list)	//打印所有路由
}