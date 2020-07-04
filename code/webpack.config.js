const path = require('path')

const HTMLPlugin = require('html-webpack-plugin')

const webpack = require('webpack')


const config= {

  devServer:{
    contentBase: path.resolve(__dirname, './dist'),       //这里指的是服务器在哪个文件夹下起
    host: 'localhost',                                                    // 服务器的IP地址，可以使用IP也可以使用localhost
    inline:true,                                                            //看下文
    compress:true,                                                    //是否起用服务端压缩
    port:8080                                                            //默认为8080
  }
}

module.exports=config