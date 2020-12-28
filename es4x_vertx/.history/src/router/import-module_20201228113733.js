// 获取module文件下子模块内容
const path = "./modules"
const modulesFiles = require.context("./modules", true, /\.js$/)
const modules = modulesFiles.keys().reduce((module, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1")
  const value = modulesFiles(modulePath).default
  module = [ ...module, ...require(`${path}/${moduleName}.js`)(vertx) ]
  return module
}, {})

console.log("modules=", modules)
export default modules
