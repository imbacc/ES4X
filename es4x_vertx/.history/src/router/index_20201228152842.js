const vertxRouterClass = require('./vertxRouterClass.js')

module.exports = (app) => {
    const router = app.is_router

    const list = [
        require('./modules/user')(app),		//用户模块路由
        require('./modules/version')(app),	//授权模块路由
    ]
	
	console.time('生产路由')
	list.forEach((info) => info.map((module) => new vertxRouterClass(module, router)))  //循环子模块路由配置 生产路由
	console.timeEnd('生产路由')
	
    console.log(list)	//打印所有路由
    app.requestHandler(router)  //注册路由
    
}