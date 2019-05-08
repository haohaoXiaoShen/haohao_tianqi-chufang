module.exports = {
    configureWebpack: {
        devServer: {
            // host: "localhost",
            // port: 1111, // 端口号
            https: false, // https:{type:Boolean}
            open: true, //配置自动启动浏览器

            proxy: {
                "/api": {
                    target: "http://apis.juhe.cn",
                    pathRewrite: {
                        "^/api": ""
                    }
                },
                "/joke": {
                    target: "http://v.juhe.cn",
                    pathRewrite: {
                        "^/joke": ""
                    }
                },
                "/add": {
                    target: "http://v.juhe.cn",
                    pathRewrite: {
                        "^/add": ""
                    }
                },
                "/weather": {
                    target: "http://v.juhe.cn",
                    pathRewrite: {
                        "^/weather": ""
                    }
                },


            }
        }
    }
}