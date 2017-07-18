# Esri Portal Item Maps

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Deployment

Push the distribution folder to GitHub Pages with the following command:

``` bash
npm run push-gh
```

This is shorthand for `git subtree push --prefix dist github gh-pages` where `dist` is the directory to push, `github` is the remote name, and `gh-pages` is the branch. This can be modified in the `package.json` file.

``` html
<div id="app"></div>
<!-- defaults -->
<!-- <div id="app" data-portal-id="b51fb4e76e154e1b93b630eac3ea94ae" class="embed-responsive-16by9"></div> -->

<!-- assumes Bootstrap 3 style included -->
<link rel="stylesheet" href="https://js.arcgis.com/4.4/esri/css/main.css">
<script src="https://js.arcgis.com/4.4/" data-esri-loader="loaded"></script>
<script type="text/javascript" src="./static/js/manifest.js"></script>
<script type="text/javascript" src="./static/js/vendor.js"></script>
<script type="text/javascript" src="./static/js/app.js"></script>
```
