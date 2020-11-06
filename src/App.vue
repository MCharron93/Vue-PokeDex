<template>
  <div id="app">
    <navbar />
    <router-link :to="{name: 'Pokemon'}">
      Go to Pokemon
    </router-link>
    <router-link :to="{name: 'Team'}">
      Go to Team
    </router-link>
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";
</style>
