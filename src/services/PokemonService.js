import { AppState } from '../AppState'
import { pokemonApi, tomApi } from './AxiosService'

class PokemonService {
  async getTeam() {
    try {
      const res = await tomApi.get('')
      AppState.team = res.data.data
    } catch (error) {
      console.error(error)
    }
  }

  async getActivePokemon(name) {
    // if (!url) {
    //   const activePokemon = this.findActivePokemon(url)
    //   const response = await pokemonApi.get(activePokemon.url)
    //   AppState.activePokemon = response.data
    // }
    const res = await pokemonApi.get('pokemon/' + name)
    AppState.activePokemon = res.data
  }

  // findActivePokemon(url) {
  //   const activePokemon = AppState.pokemon.find(p => p.url === url)
  //   return activePokemon
  // }

  async getAllPokemon() {
    try {
      const res = await pokemonApi.get('pokemon?limit=151&offset=151')
      AppState.pokemon = res.data.results
      // console.log(AppState.pokemon)
    } catch (error) {

    }
  }
}

export const pokemonService = new PokemonService()
