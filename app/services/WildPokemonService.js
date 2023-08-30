import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"


// @ts-ignore
export const pokeApi = new axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 8000
})


class WildPokemonService {
    async getPokemon() {
        const response = await pokeApi.get()
        // console.log("Got Pokemon", response.data.results)
        AppState.pokemonList = response.data.results
    }
    async getOnePokemon(name) {
        console.log(name)
        const response = await pokeApi.get(name)
        // console.log("Single Pokemon", response.data)
        AppState.activePokemon = new Pokemon(response.data)
        console.log(AppState.activePokemon)
    }
}



export const wildPokemonService = new WildPokemonService