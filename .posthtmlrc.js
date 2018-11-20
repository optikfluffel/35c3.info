module.exports = {
  plugins:
    [
      require('posthtml-include')({ root: './src' }),
      require('posthtml-expressions')({ locals: { title: '35c3.info' } }),
    ]
}
