# esri-portal-map

> A Vue.js project

## Installation

### CDN (Browser)

```html
<div id="app">
  <div is="EsriPortalMap" portal-id="b51fb4e76e154e1b93b630eac3ea94ae" @mapready="mapready"></div>
</div>

<!-- Esri Stylesheet -->
<link rel="stylesheet" href="https://js.arcgis.com/4.6/esri/css/main.css">

<!-- include babel-polyfill for IE11 Promise support -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js"></script>
<!-- include Vue -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- set EsriPortalMap Vue component -->
<script src="https://commbocc.github.io/esri-portal-map/dist/build.var.js"></script>

<script type="text/javascript">
var app = new Vue({
  el: '#app',
  components: {
    EsriPortalMap: EsriPortalMap
  },
  methods: {
    mapready (map) {
      // do things with map
      // map.webmap
      // map.mapview
    }
  }
});
</script>
```

### NPM

`npm i --save https://github.com/Commbocc/esri-portal-map`

Example Single File Component

```html
<!-- App.vue -->
<template>
  <main>
    <div is="EsriPortalMap" portal-id="b51fb4e76e154e1b93b630eac3ea94ae" @mapready="mapready"></div>
  </main>
</template>

<script>
import EsriPortalMap from 'esri-portal-map'

export default {
  // ...
  components: {
    EsriPortalMap
  }
  // ...
}
</script>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
