var path = require('path');
var webpack = require('webpack');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode:'development',
    entry:path.join(__dirname,'../src/main.js'),
    output:{
        path:path.join(__dirname,'../dist'),
        filename:'bundle.js'
    },
    resolve:{
        extensions:['.js','.vue','.css'],
        alias:{
            'vue$': 'vue/dist/vue.js'
        }
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.js$/,
                use:'babel-loader?cacheDirectory=true',
                include:[
                    path.join(__dirname, '../src/')
                ]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|gif|png)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:8192
                    }
                }]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    devServer:{
        port:8080,
        contentBase:path.join(__dirname,'../dist'),
        host:'0.0.0.0',
        historyApiFallback:true
    }
}