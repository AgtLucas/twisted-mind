const getConfig = require('hjs-webpack')

const config = getConfig({
  in: 'src/coffee/app.coffee',
  out: 'public',
  clearBeforeBuild: true
})

config.module.loaders.push({
  test: /\.coffee$/, loader: 'coffee-loader'
})

module.exports = config
