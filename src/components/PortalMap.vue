<template lang="html">
  <div class="embed-responsive embed-responsive-16by9 mb-3">
    <div ref="mapItem" class="embed-responsive-item"></div>
  </div>
</template>

<script>
import * as esriLoader from 'esri-loader'

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
    return esriLoader.loadModules([
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
        this.mapview.ui.add(homeWidget, "top-left")
      }
    })
  }
}
</script>
