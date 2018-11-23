const locals = {
  title: '35C3 Refreshing Memories',
  shortcutList: require('./src/shortcuts')
}

module.exports = {
  plugins:
    [
      require('posthtml-include')({ root: './src' }),
      require('posthtml-expressions')({ locals: locals }),
    ]
}
