/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/1/22 14:31
 */
require('@babel/register')({
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties'
  ]
})

require('./src/index')
