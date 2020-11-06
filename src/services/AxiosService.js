import Axios from 'axios'
export const pokemonApi = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 3000
})

export const tomApi = Axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/Tom/pokemon',
  timeout: 5000
})

// NOTE remember to add the auth headers to any axios instance you need auth on.
export const setBearer = function(bearer) {
  pokemonApi.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  pokemonApi.defaults.headers.authorization = ''
}
