// vue.config.js
module.exports = {
    // 打出来的包可以被部署在的路径
    publicPath: '/',
    // publicPath: process.env.NODE_ENV === 'production'
    // ? '/production-sub-path/'
    // : '/'

    // build 时生成的生产环境构建文件的目录
    outputDir: 'dist',
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: '',
    indexPath: 'index.html',
    baseUrl: process.env.NODE_DEV === 'production' ? './': '/',
    devServer: {
        port: 8888,
        host: 'localhost',
        proxy:{
            '/github':{
                target: 'https://api.github.com', //目标服务器地址
                changeOrigin: true,  //开启代理
                secure: true,
                pathRewrite:{
                    "^/github":""
                }
            }
        }
    },
    lintOnSave: false, //格式检查
    productionSourceMap: false // 打包不生成, 加速打包
}