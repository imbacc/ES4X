import { Router } from '@vertx/web';
import importModule from "./import-module.js"
const vertxRouterClass = require('./vertxRouterClass.js')

module.exports = (vertx) => {
    Router router = Router.router(vertx)
    const list = importModule
	
	console.time('生产路由')
	list.forEach((info)=> info.map((module)=> new vertxRouterClass(module, router)))  //循环子模块路由配置 生产路由
	console.timeEnd('生产路由')
	
	// koa.use(router.routes()).use(router.allowedMethods())
	
	console.log(list)	//打印所有路由
}