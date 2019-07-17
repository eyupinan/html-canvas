
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:{
        index:'./index.js'
        },
    output:{
        path:'C:\\Users\\ibrahim eyyüp inan\\Desktop\\webpack deneme',
        filename:'[name].bundle.js',
        

    },
    module: {
        rules: [
          { test: /\.html$/, use: 'html-loader' },
          {test: /\.css$/, use: ['style-loader','css-loader']},
          {test: /\.jpg|png|jpeg|gif$/, use:['file-loader','image-webpack-loader']

        }
        ]
      },
      plugins:[

          new HtmlWebpackPlugin({
              template:'./index.html',
              filename:'index.html',
              chunks:['index']
          }),
          
         
        ]
}