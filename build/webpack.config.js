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
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader',
                exclude:/node_modules/
            },
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}