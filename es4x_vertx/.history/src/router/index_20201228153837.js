import { Router } from '@vertx/web'
const vertxRouterClass = require('./vertxRouterClass.js')

module.exports = (vertx, app) => {
    const router = Router.router(vertx)

    const list = [
        require('./modules/user')(vertx),		//用户模块路由
        require('./modules/version')(vertx),	//授权模块路由
    ]

    let time = new Date().getTime()
    list.forEach((info) => info.map((module) => new vertxRouterClass(module, router)))  //循环子模块路由配置 生产路由
    
	console.log(`生产路由 ${(new Date().getTime() - time) / 1000}s`)
    // console.log(list)	//打印所有路由
    app.requestHandler(router)  //注册路由
}