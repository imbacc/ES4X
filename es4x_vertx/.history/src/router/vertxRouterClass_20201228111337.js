
class koaRouterClass {
	constructor(module) {
		this.url = module['url']
	    this.method = module['method'] ? module['method'].toUpperCase() : 'GET'
		this.handler = module['handler']
		if(this.handler){
			this.handler = new Proxy(this.handler,{
				apply (target, _this, args) {
					// console.log('target=',target)
					// console.log('_this=',_this)
					// console.log('args=',args)
                    
					return Reflect.apply(...arguments)
				}
			})
		}else{
            this.handler = () => console.log('默认路由方法...')
        }
	}
}

const routerFactory = (r) => r.method === 'GET' ? router.get(r.url,r.handler) : router.post(r.url,r.handler)

import { Router } from '@vertx/web';

Router router = Router.router(vertx);

router.route().handler(ctx -> {

  // This handler will be called for every request
  HttpServerResponse response = ctx.response();
  response.putHeader("content-type", "text/plain");

  // Write to the response and end it
  response.end("Hello World from Vert.x-Web!");
});

server.requestHandler(router).listen(8080);

module.exports = koaRouterClass