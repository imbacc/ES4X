
class koaRouterClass {
	constructor(module, router) {
		this.url = module.url
		this.method = module.method ? module.method.toLowerCase() : 'get'
		this.handler = router[this.method](this.url).handler(module.handler)
	}
}

module.exports = koaRouterClass