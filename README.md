# React-sane-starter

<p align="left" style="background:white;"><img  height="150"src="https://pbs.twimg.com/media/Cs4VTpdVIAAU_t3.jpg"/><img height="150" src = "https://ih0.redbubble.net/image.388514988.5586/flat,800x800,075,f.jpg" /> <img style="margin-left: 20px; background:white"height="150" src = "http://logo-logos.com/wp-content/uploads/2016/10/Docker_logo_logotype.png" /></p>

A sane starting point for react+redux development.

The starter app includes a working example app(+tests) which should help you get started fast.

## Directory structure

``` js
.
├── docker
│   ├── dev  // Development docker-compose and dockerfile
│   │   ├── docker-compose.yml
│   │   └── Dockerfile
│   └── prod // Production docker files
│       ├── docker-compose.yml
│       ├── Dockerfile
│       └── default.conf // nginx conf for javascript SPA's
│
├── docs // directory for your documentation
│
├── src
│   ├── actions // actions go here
│   ├── assets // directory for statis assets
│   ├── components // dumb components go here
│   ├── constants // constants can be declared here
│   ├── containers // smart components go here
│   ├── reducers // reducers go here
│   ├── store
│   ├── styles // scss + css
│   ├── tests // global test files
│   ├── utils // utility classes / objects
│   ├── favicon.ico
│   ├── index.js
│   ├── index.ejs
│   └── webpack-public-path.js
│
├── tools // webpack tools, build tools, etc.
│
├── .babel.json
├── .editorconfig
├── .gitignore
├── .istanbul.yml // test coverage config
├── .jslintrc.json
├── LICENSE
├── package.json
├── README.md
├── webpack.config.dev.js
└── webpack.config.prod.js
```

## Docker

The starter includes a docker container/file for both the development build and the production build.

The production build runs an NGINX server which checks for a static file first and if it doesn't find one it will redirect to your app. (where a route should catch it)

To run the development docker run: `npm run docker-run-dev` and to run the production build use: `npm run docker-run-prod`.


## Sane production builds
One of the things that really annoys me about pretty much every webpack product is the bundling of assets.
Now don't get me wrong, some stuff should be bundled (js/scss), but some stuff shouldn't (images/fonts).

Most webpack solutions choose to dump every asset into the root folder which , to me, becomes a mess.

This starter puts your assets in the assets folder and keeps whatever file structure you've made inside it.
The "src/assets" tree in your development environment looks like like this:
```
src/assets/
└── images
    └── image.ico
```

which means your production app will be structured like this:

```
dist
├── assets
│   └── images
│       └── image.ico
├── favicon.ico
├── index.html
├── main.d41d8cd98f00b204e9800998ecf8427e.css
├── main.d41d8cd98f00b204e9800998ecf8427e.css.map
├── main.ddc33abe456490476d44.js
└── main.ddc33abe456490476d44.js.map
```

Much, much cleaner.

## Inspiration
The starting point for this start was [react-slingshot by Corey House](https://github.com/coryhouse/react-slingshot).
I have worked with react-slingshot for a while and it works really well but it has some quirks I don't quite like.
This starter aims to resolve those quirks and provide a better starting point for new react apps.

## Questions?
Check out the [FAQ](/docs/FAQ.md)
