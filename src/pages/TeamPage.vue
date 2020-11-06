<template>
  <div class="team container-fluid">
    <div class="row">
      <team-component v-for="member in team" :key="member._id" :team-prop="member" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { pokemonService } from '../services/PokemonService'
import TeamComponent from '../components/TeamComponent'
export default {
  name: 'Team',
  setup() {
    onMounted(() => {
      pokemonService.getTeam()
    })
    return {
      team: computed(() => AppState.team)
    }
  },
  components: { TeamComponent }
}
</script>

<style lang="scss" scoped>

</style>
