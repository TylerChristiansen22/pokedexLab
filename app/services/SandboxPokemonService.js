import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { api } from "./AxiosService.js";


class SandboxPokemonService {
    async getMyPokemon() {
        const response = await api.get('api/pokemon')
        console.log("My Caught Pokemon", response.data)
        let myPokemon = response.data.map(p => new Pokemon(p))
        AppState.myPokemon = myPokemon
    }


    async catchPokemon() {
        const pokemon = AppState.activePokemon
        console.log("Catching", pokemon)
        const response = await api.post('api/pokemon', pokemon)
        console.log("Caught", response.data)
        AppState.myPokemon.push(new Pokemon(response.data))
        AppState.emit('myPokemon')
    }
    setActivePokemon(name) {
        let pokemon = AppState.myPokemon.find(p => p.name == name)
        AppState.activePokemon = pokemon
    }
}


export const sandboxPokemonService = new SandboxPokemonService