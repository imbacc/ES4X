import { Router } from '@vertx/web'
const vertxRouterClass = require('./vertxRouterClass.js')

module.exports = (vertx) => {
    const router = Router.router(vertx)

    const list = [
        ...require('./modules/user')(vertx),		//用户模块路由
        ...require('./modules/version')(vertx),	//授权模块路由
    ]
	
	console.time('生产路由')
	list.forEach((info)=> info.map((module)=> new vertxRouterClass(module, router)))  //循环子模块路由配置 生产路由
	console.timeEnd('生产路由')
	
	console.log(list)	//打印所有路由
}