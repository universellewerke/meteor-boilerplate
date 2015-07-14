![Universelle-Werke 1.0](https://cloud.githubusercontent.com/assets/7649376/8663391/9005e5cc-29ca-11e5-9630-09934007c8c0.png)

#Meteor-Boilerplate

This is a "light documentation" of the existing [Universelle-Werke](http://universellewerke.com) [Meteor](https://www.meteor.com) web app and starting point for future projects.

## Getting Started

If you haven't installed Meteor yet follow the instructions [here](https://www.meteor.com/install). Afterwards point your terminal to the root directory of the project and call `meteor --settings settings.json` and you should see the app running at `http://localhost:3000` in your browser.

Before you start working it's a good idea to update all packages using `meteor update`.

## Structure

```
PROJECT-NAME/
├── client/
│	├── helpers/
│	├── stylesheets/
│	└── views/
├── lib/
│	├── collections/
│	├── config/
│	└── router.js
├── public/
└── server/
```

## Stylesheets

We use [Sass](http://sass-lang.com) with [Bourbon](http://bourbon.io) and [Bootstrap](http://getbootstrap.com).
To organize the stylesheets we try to follow [Evernote's Sass Structure Boilerplate](https://github.com/evernote/sass-build-structure) – except we use the Sass syntax.

## Packages
During the development of the Universelle-Werke 1.0 web app we open-sourced the following packages:
- [Hypergrowth](https://atmospherejs.com/floriannagel/hypergrowth)
- [Social-Media-Feed](https://github.com/nagelflorian/meteor-social-media-feed)