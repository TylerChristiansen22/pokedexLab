import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { wildPokemonService } from "../services/WildPokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawActivePokemon() {
    let activePokemon = AppState.activePokemon
    if (activePokemon) {
        setHTML('active-pokemon', activePokemon.activeTemplate)
    }
}

function _drawPokemonList() {
    let pokemon = AppState.pokemonList
    let listContent = ''
    pokemon.forEach(p => listContent += Pokemon.wildListTemplate(p))
    setHTML('pokemon-list', listContent)
    // console.log(listContent)
}

export class WildPokemonController {
    constructor() {
        this.getPokemon()
        AppState.on('pokemonList', _drawPokemonList)
        AppState.on('activePokemon', _drawActivePokemon)
    }

    async getPokemon() {
        try {
            await wildPokemonService.getPokemon()
        } catch (error) {
            Pop.error(error)
        }
    }

    async getOnePokemon(name) {
        try {
            console.log(name)
            await wildPokemonService.getOnePokemon(name)
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }
}