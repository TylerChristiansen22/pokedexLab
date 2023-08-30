



export class Pokemon {
    constructor(data) {
        this.name = data.name
        // this.nickName = data.nickName
        this.img = data.img || data.sprites.front_default
        this.weight = data.weight
        this.height = data.height
        this.creatorId = data.creatorId
    }

    get activeTemplate() {
        return `<div class="row justify-content-center">${this.name}</div>
            <div class="d-flex justify-content-between p-5">
              <div>Height: ${this.height}</div>
              <div>Weight: ${this.weight}</div>
            </div>
            <div class="d-flex justify-content-center">
              <img class="w-100"
                src="${this.img}"
                alt="Pokemon">
            </div>
            ${this.catchPokemonButton}`
    }

    get ListTemplate() {
        return `
        <div><p onclick="app.SandboxPokemonController.setActivePokemon('${this.name}')" class = "selectable p-1 rounded mb-1">${this.name}</p></div>`
    }
    get catchPokemonButton() {
        return `<button class="btn btn-success" onclick="app.SandboxPokemonController.catchPokemon()"> Catch Pokemon!</button>`
    }

    static wildListTemplate(wildPokemon) {
        return `
        <p class="selectable text-light bg-dark py-1 mb-0" onclick="app.WildPokemonController.getOnePokemon('${wildPokemon.name}')">${wildPokemon.name}</p>
        `
    }
}