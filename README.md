# [35c3.info](https://35c3.info)

[![Build Status](https://travis-ci.org/optikfluffel/35c3.info.svg?branch=master)](https://travis-ci.org/optikfluffel/35c3.info)
[![Greenkeeper badge](https://badges.greenkeeper.io/optikfluffel/35c3.info.svg)](https://greenkeeper.io/)

## 🚀 Adding A New Shortcut

To add a new shortcut to 35c3.info open up `src/shortcuts.js` and add your entry to the list.

```js
// Example shortcut

{
  emoji: "💖",
  name: "Wanted!",
  description: "Some link that you think is missing.",
  href: "https://i.imgur.com/3t2npON.gif?noredirect"
}
```

_Tip: Don't forget the comma, when adding to the list._

## 🏗 Development

### Dependencies

_Make sure you have [Node.js installed](https://nodejs.org)._

```sh
# get all the npm dependencies
npm install
```

### Development Server

```sh
# start the development server and open up localhost:1234
npm start
```

_The live reload doesn't work, when changing `src/shortcuts.js`, I'm sorry. If you want to help with this go and have a look at [parcel-bundler/parcel#2317](https://github.com/parcel-bundler/parcel/issues/2317)._
