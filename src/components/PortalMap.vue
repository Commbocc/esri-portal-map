<template lang="html">
  <div class="embed-responsive embed-responsive-16by9 mb-3">
    <div ref="mapItem" class="embed-responsive-item"></div>
  </div>
</template>

<script>
import { loadModules } from 'esri-loader'

export default {
  props: {
    portalId: {
      type: String,
      default: 'b51fb4e76e154e1b93b630eac3ea94ae'
    },
    homeBtn: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      webmap: null,
      mapview: null
    }
  },
  created () {
    return loadModules([
      'esri/WebMap',
      'esri/views/MapView',
      'esri/widgets/Home'
    ]).then(([WebMap, MapView, Home]) => {
      this.webmap = new WebMap({
        portalItem: {
          id: this.portalId
        }
      })

      this.mapview = new MapView({
        container: this.$refs.mapItem,
        map: this.webmap
      })

      // adds the home widget to the top left corner of the MapView
      if (this.homeBtn) {
        var homeWidget = new Home({
          view: this.mapview
        })
        this.mapview.ui.add(homeWidget, 'top-left')
      }

      this.webmap.when(wm => {
        this.$emit('mapready', this)
      })
    })
  }
}
</script>

<style media="screen">
@import url('https://js.arcgis.com/4.6/esri/css/main.css');
</style>
