const locals = {
  title: '35c3.info',
  shortcutList: [
    { emoji: "📚", name: "Wiki", description: "35c3 Wiki", href: "https://events.ccc.de/congress/2018" },
    { emoji: "💬", name: "IRC Chat", description: "Web client for #35c3 channel on irc.hackint.org", href: "https://webirc.hackint.org/#irc://irc.hackint.org/#35c3" },
    { emoji: "🚃", name: "LVB Connection Info", description: "Fahrplanauskunft - Leipziger Verkehrsbetriebe", href: "https://www.l.de/verkehrsbetriebe/fahrplan" }
  ]
}

module.exports = {
  plugins:
    [
      require('posthtml-include')({ root: './src' }),
      require('posthtml-expressions')({ locals: locals }),
    ]
}
