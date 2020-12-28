
class koaRouterClass {
	constructor(module, router) {
		this.url = module.url
		this.method = module.method ? module.method.toLowerCase() : 'get'
		this.handler = router[this.method](this.url).handler(module.handler)
	}

	// router.route('/').handler(ctx => {
	// 	ctx.response().end('Hello from Vert.x Web!')
	// })
	
// app.route('/').handler(ctx => {
//   ctx.response()
//     .end('Hello from Vert.x Web!');
// });
}

module.exports = koaRouterClass