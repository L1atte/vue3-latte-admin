//处理resolve
const path = require('path')
const webpack = require('webpack')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 选项...
  css: {
      loaderOptions: {
        scss: {
          prependData: `@import "./src/styles/main.scss";`
        }
      }
    },
  lintOnSave: process.env.NODE_ENV !== 'production',
  chainWebpack: config => {
    // config.module.rules.delete("svg") //重点：删除默认配置重处理svg
    
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("base", resolve("baseConfig"))
      .set("public", resolve("public"));

      config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg'))
      .end();
  config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
          symbolId: 'icon-[name]',
      })
      .end();
  },
}