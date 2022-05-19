'use strict'

class card extends HTMLElement {
    constructor() {
        super();
        this.build()
    }

    build () {
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.styles())
        shadow.appendChild(this.createCard())
    }

    styles() {
        const style = document.createElement('style')

        style.textContent = `
        .card{
            width: 250px;
            height: 250px;
        
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            margin-right: 10px;
            background-color: ${this.bgcolor()};
        }
        
        .card-text{
            width: 50%;
            padding: 4px;
            text-align: center;
            text-transform: uppercase;
            color: #000;
            border-radius: 12px;
            box-shadow: 0 0 2px #000;
        }
        
        .card-image{
            width: 50%;
            height: 50%;
            border-radius: 50%;
            background-image: url(${this.image()});
            background-size: cover;
            box-shadow: inset 0 0 8px #000;
        }
        `
        return style
    }

    createCard() {

        const card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `
            <div class="card-text">${this.name()}</div>
            <div class="card-image"></div>
            <div class="card-text">${this.team()}</div>
        `
        return card
    }

    bgcolor() {
        const status = this.getAttribute("data-bgcolor") ?? ""
        let color = "#05b016"
        if(status == "aprovado") {
            color = "#05b016"
        }else if(status == "reprovado") {
            color = "#d10a06"
        }else if(status == "desistente") {
            color = "#b08805"
        }
        return color
    }

    name() {
        const name = this.getAttribute("data-name") ?? "Aluno(a)"
        return name
    }

    image() {
        const image = this.getAttribute("data-image") ?? "../img/sem_perfil.jpg"
        return image
    }

    team() {
        const team = this.getAttribute("data-team") ?? "Turma"
        return team
    }
}

customElements.define('card-student', card)