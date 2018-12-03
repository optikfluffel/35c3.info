const shortcutList = [
  // TODO: Add again, after it's open for the public.
  //
  // {
  //   emoji: "📚",
  //   name: "Wiki",
  //   description: "35C3 Wiki",
  //   href: "https://events.ccc.de/congress/2018"
  // },
  {
    emoji: "☑️",
    name: "Congress Checklist",
    description: "MacLemon/CongressChecklist at Github",
    href: "https://github.com/MacLemon/CongressChecklist#congresschecklist"
  },
  {
    emoji: "💬",
    name: "IRC Chat",
    description: "Web client for #35c3 channel on irc.hackint.org",
    href: "https://webirc.hackint.org/#irc://irc.hackint.org/#35c3"
  },
  {
    emoji: "🚃",
    name: "LVB Connection Info",
    description: "Fahrplanauskunft - Leipziger Verkehrsbetriebe",
    href: "https://www.l.de/verkehrsbetriebe/fahrplan"
  }]

const locals = {
  title: '35C3 Refreshing Memories',
  shortcutList: shortcutList
}

module.exports = {
  plugins:
    [
      require('posthtml-include')({ root: './src' }),
      require('posthtml-expressions')({ locals: locals }),
    ]
}
