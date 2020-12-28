/// <reference types="es4x" />
// @ts-check

import { Router } from '@vertx/web'

// your code goes here...
const app = vertx.createHttpServer()
const port = 6666	//默认端口
const ip = '127.0.0.1'
const router = Router.router(vertx)
vertx.prototype.is_router = router
app.prototype.is_router = router

console.log("vertx=", vertx)
console.log("app=", app)

// // require('./common/decorate')(app) 	//注册装饰器
// // require('./common/throw')(app) 		//注册抛异常
require('./common/intercept')(app)  //注册拦截器
require('./router/index')(app) 		//注册路由
// // require('./common/tools')(app) 	//注册插件 
// // require('./db/mysql')(app) 	    //注册Mysql
// // require('./db/redis')(app) 		//注册Redis

// // router.route('/').handler(ctx => {
// //   ctx.response()
// //     .end('Hello from Vert.x Web!');
// // });

// // router.requestHandler(function (req) {
// //   req.response().putHeader("content-type", "text/plain").end("Hello!")
// // })

try{
  // 监听端口并启动
  // app.requestHandler(router)
	app.listen(port, ip)
  console.log(`服务指向IP: ${ip}`)
	console.log(`服务监听端口: ${port}`)
  console.log(`服务已启动: http://${ip}:${port}/`)
}catch(err){
	throw err
}