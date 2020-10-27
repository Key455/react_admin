const path = require('path')
const pxtoviewport = require('postcss-px-to-viewport')

module.exports = {
  webpack: {
    // 配置路劲别名，将来路劲可以简写
    alias: {
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    }
  },
  style: {
    postcss: {
      plugins: [
        pxtoviewport({
          viewportWidth: 375
        })
      ]
    }
  }
}