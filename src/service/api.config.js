// 包装API头部

const isProuction  = process.env.NODE_ENV === 'production'

// 开发环境下采用PROXY设置的’/github'
module.exports = {
    baseUrl: isProuction ? 'http:// 127.0.0.1:5000': ''
}



/*
设置vue.config.js 里的proxy代理前缀  ‘/xxx’ 全局能引用
设置api.config 用于判断当前开发状态的根路径
设置request.js 里封装 axios请求，里面的baseUrl可以引入api.config的路径。
在写api的function引入request.js包装好的axios直接使用
*/