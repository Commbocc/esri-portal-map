<template>
  <div id="app" class="container">

    <!-- water bottle filling stations -->
    <div is="PortalMap" portal-id="dc2e5a7337264f5d8825f3b8a94c5eaf"></div>

  </div>
</template>

<script>
import PortalMap from './components/PortalMap'

export default {
  name: 'app',
  components: {
    PortalMap
  }
}
</script>
