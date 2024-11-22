// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     publicPath: 'vue-assignment.github.io',
//
// })

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-assignment.github.io/'
        : '/'
}