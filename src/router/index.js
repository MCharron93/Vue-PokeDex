import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import Profile from '../pages/Profile.vue'
// import { Auth0Provider } from '@bcwdev/auth0provider-client'
import Pokemon from '../pages/PokemonPage.vue'
import ActivePokemon from '../pages/ActivePokemonPage.vue'
import Team from '../pages/TeamPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: Pokemon
  },
  {
    path: '/pokemon/:name',
    name: 'ActivePokemon',
    component: ActivePokemon
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
    // beforeEnter: Auth0Provider.authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
