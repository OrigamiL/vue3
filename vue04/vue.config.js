const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/path':{
        target:'https://i.maoyan.com',
        changeOrigin:true,
        //rewrite:path=>path.replace("/^\/path",""),
        pathRewrite:{
          '^/path':''
        }
      }
    }

  }
})
