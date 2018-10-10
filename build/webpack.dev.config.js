var path = require('path');
var webpack = require('webpack');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var  UglifyjsWebpackPlugin= require('uglifyjs-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
module.exports = {
    mode:'development',
    entry:path.join(__dirname,'../src/main.js'),
    output:{
        path:path.join(__dirname,'../dist'),
        filename:'bundle.[hash].js',
        chunkFilename:'[name].[chunkhash].js'
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
                // use:ExtractTextPlugin.extract({
                //     fallback:'style-loader',
                //     use:'css-loader'
                // })
                use:[MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test:/\.(jpg|gif|png)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:8192
                    }
                }]
            },
            {
                test: /\.mp3(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.join(__dirname,'../index.html')
        }),
        new CleanWebpackPlugin(['dist'],{
            root:path.join(__dirname,'../')
        }),
        new UglifyjsWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
             }
         }),
        //  new ExtractTextPlugin({
        //      filename:'[name].[contenthash:5].css',
        //      allChunks:true
        //  })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'vender',
        //     minChunks:({resource})=>{
        //         resource && resource.indexOf('node_modules') >= 0
        //         && resource.match(/\.js$/) 
        //     }
        // })
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        })
    ],
    devServer:{
        port:8081,
        contentBase:path.join(__dirname,'../dist'),
        historyApiFallback:true
    },
    optimization:{
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
}