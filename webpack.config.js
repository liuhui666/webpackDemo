const path = require('path');

// webpack 是node写出来的  所以用node的写法
module.exports = {
  mode:'development',// 模式  production development
  entry: './src/index.js',  //相对路径
  output: { 
    path: path.resolve(__dirname,'./dist'),//路径必须是绝对路径  __dirname在当前目录下生成一个
    filename: 'bundle.js'//打包后文件名
  },
  
  module: {
    rules: [

    ]
  },
  plugins: [],
  resolve: {

  },
  devServer:{
    port:6666,
    progress:true,//打包看到进度条
    contentBase:'./dist'//以这个作为静态服务

  }
}