import { AppState } from "../AppState.js"
import { sandboxPokemonService } from "../services/SandboxPokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawMyPokemonList() {
    const pokemon = AppState.myPokemon
    let listContent = ''
    pokemon.forEach(p => listContent += p.ListTemplate)
    setHTML('my-pokemon', listContent)
}


export class SandboxPokemonController {
    constructor() {
        console.log('Sandbox Pokemon Controller')
        AppState.on('user', this.getMyPokemon)
        AppState.on('myPokemon', _drawMyPokemonList)
    }

    async getMyPokemon() {
        try {
            await sandboxPokemonService.getMyPokemon()
        } catch (error) {
            Pop.error(error)
        }
    }

    async catchPokemon() {
        try {
            await sandboxPokemonService.catchPokemon()
        } catch (error) {
            Pop.error(error)
        }
    }

    async setActivePokemon(name) {
        try {
            await sandboxPokemonService.setActivePokemon(name)
        } catch (error) {
            Pop.error(error)
        }
    }
}