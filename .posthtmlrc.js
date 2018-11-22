const locals = {
  title: '35c3.info',
  shortcutList: require('./src/shortcuts')
}

module.exports = {
  plugins:
    [
      require('posthtml-include')({ root: './src' }),
      require('posthtml-expressions')({ locals: locals }),
    ]
}
