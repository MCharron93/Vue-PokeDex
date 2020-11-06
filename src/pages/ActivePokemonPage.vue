<template>
  <div class="active-pokemon container-fluid" v-if="pokemon.name">
    <div class="row justify-content-center">
      <div class="col-6 justify-items-center">
        <img :src="pokemon.sprites.front_default" alt="gator img" class="img-fluid">
        <h2>{{ pokemon.name }}</h2>
        <button class="btn btn-info">
          Add to Team
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { pokemonService } from '../services/PokemonService'
import { AppState } from '../AppState'
export default {
  name: 'ActivePokemon',
  props: {
    activePokemon: Object
  },
  setup(props) {
    // const activePoke = computed(() => props.activePokemon)
    const route = useRoute()
    onMounted(() => {
      pokemonService.getActivePokemon(route.params.name)
    })
    return {
      pokemon: computed(() => AppState.activePokemon)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
