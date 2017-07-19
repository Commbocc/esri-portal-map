// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'

Vue.config.productionTip = false

var appElem = document.getElementById('app')

/* eslint-disable no-new */
new Vue({
	el: appElem,
	// router,
	template: '<app :portal-id="portalId" :class="classes"></app>',
	components: { 'app': App },
	data: {
		classes: appElem.className,
		portalId: appElem.getAttribute('data-portal-id')
	}
})
