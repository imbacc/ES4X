// 获取module文件下子模块内容
const path = "./comp-modules";
const modulesFiles = require.context("./comp-modules", true, /\.vue$/);
const modules = modulesFiles.keys().reduce((module, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  if (moduleName.indexOf("/index") !== -1 && moduleName.indexOf("child-modules") === -1) {
    const value = modulesFiles(modulePath).default;
    let idx = moduleName.indexOf("/");
    let newName = moduleName;
    if (idx !== -1) newName = moduleName.substring(0, idx);
    const comp = { [value.name || newName]: () => import(`${path}/${moduleName}.vue`) };
    module = { ...module, ...comp };
  }
  return module;
}, {});

console.log("comp modules=", modules);
export default modules;
