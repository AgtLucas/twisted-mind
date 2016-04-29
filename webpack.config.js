const getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/coffee/app.coffee',
  out: 'public',
  clearBeforeBuild: true
})
