<template>
  <div class="pokemon container-fluid">
    <h1>Pokemon page</h1>
    <div class="row justify-content-center">
      <pokemon-component v-for="poke in pokemon" :key="poke.name" :poke-prop="poke" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { pokemonService } from '../services/PokemonService'
import { AppState } from '../AppState'
import PokemonComponent from '../components/PokemonComponent'

export default {
  name: 'Pokemon',

  setup() {
    onMounted(() => {
      pokemonService.getAllPokemon()
    })
    return {
      pokemon: computed(() => AppState.pokemon)
    }
  },
  components: { PokemonComponent }
}
</script>

<style lang="scss" scoped>

</style>
