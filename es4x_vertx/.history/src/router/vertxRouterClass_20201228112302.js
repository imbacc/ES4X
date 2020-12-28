
import { Router } from '@vertx/web';

Router router = Router.router(vertx);

class koaRouterClass {
	constructor(module) {
		this.url = module.url
	    this.method = module.method ? module.method.toLowerCase() : 'get'
		this.handler = module.handler
		this.factory = router[this.method](this.url)
		this.factory.handler(this.handler)
	}
}

module.exports = koaRouterClass