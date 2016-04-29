const getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/☕️/app.coffee',
  out: 'public',
  clearBeforeBuild: true
})
