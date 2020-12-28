/// <reference types="es4x" />
// @ts-check

// your code goes here...
const app = vertx.createHttpServer()
const port = 6666	//默认端口
const ip = '127.0.0.1'

require('./common/decorate')(koa) 	//注册装饰器
// require('./common/intercept')(koa)  //注册拦截器
// require('./common/throw')(koa) 		//注册抛异常
// require('./router/index')(koa) 		//注册路由
// require('./common/tools')(KOA_AK) 	//注册插件 
// require('./db/mysql')(KOA_AK) 	    //注册Mysql
// require('./db/redis')(KOA_AK) 		//注册Redis

// import { Router } from '@vertx/web';

// const app = Router.router(vertx);

// app.route('/').handler(ctx => {
//   ctx.response()
//     .end('Hello from Vert.x Web!');
// });

// app.requestHandler(function (req) {
//   req.response().putHeader("content-type", "text/plain").end("Hello!")
// })

try{
  // 监听端口并启动
	app.listen(port, ip)
  console.log(`服务指向IP: ${ip}`)
	console.log(`服务监听端口: ${port}`)
  console.log(`服务已启动: http://${ip}:${port}/`)
}catch(err){
	throw err
}

