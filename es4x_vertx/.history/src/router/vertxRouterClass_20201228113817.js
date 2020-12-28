
class koaRouterClass {
	constructor(module, router) {
		this.url = module.url
	    this.method = module.method ? module.method.toLowerCase() : 'get'
		this.handler = module.handler
		this.factory = router[this.method](this.url)
		this.factory.handler(this.handler)
	}
}

module.exports = koaRouterClass