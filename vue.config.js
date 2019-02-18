module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:3000',
        //   ws: true,
          changeOrigin: true,
          //http://localhost:8080/api => http://localhost:3000/lists
          pathRewrite:{'^/api' : '/lists'}
        
        }
      }
    }
  }