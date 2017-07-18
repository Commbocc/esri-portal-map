<template>
	<div id="app" class="embed-responsive embed-responsive-16by9">
		<div id="mapDiv" class="embed-responsive-item"></div>
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
import * as esriLoader from 'esri-loader'

export default {
	name: 'app',
	props: ['portalId'],
	data () {
		return {
			webmap: null,
			mapview: null
		}
	},
	mounted () {

		esriLoader.dojoRequire([
			'esri/WebMap',
			'esri/views/MapView',
			'esri/widgets/Home'
		], (WebMap, MapView, Home) => {

			this.webmap = new WebMap({
				portalItem: {
					id: this.portalId || 'b51fb4e76e154e1b93b630eac3ea94ae'
				}
			})

			this.mapview = new MapView({
				container: 'mapDiv',
				map: this.webmap
			})

			var homeWidget = new Home({
				view: this.mapview
			})

			// adds the home widget to the top left corner of the MapView
			this.mapview.ui.add(homeWidget, "top-left")

		});

	}
}
</script>
