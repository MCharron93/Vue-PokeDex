<template>
  <div class="pokemon-component col-3">
    <h3 @click="getActivePokemon(pokemon.name)" :active-pokemon="pokemon">
      {{ pokemon.name }}
    </h3>
  </div>
</template>

<script>
import { computed } from 'vue'
import { pokemonService } from '../services/PokemonService'
import { useRouter } from 'vue-router'
export default {
  name: 'PokemonComponent',
  props: {
    pokeProp: Object
  },
  setup(props) {
    const router = useRouter()
    return {
      pokemon: computed(() => props.pokeProp),
      getActivePokemon(name) {
        router.push({ name: 'ActivePokemon', params: { name: props.pokeProp.name } })
        pokemonService.getActivePokemon(name)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
