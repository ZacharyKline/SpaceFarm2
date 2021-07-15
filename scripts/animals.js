// Class for the animals, and common methods
class Animal {
    constructor(name, price, wool, increase) {
        this.name = name
        this.price = price
        this.increase = increase
        this.wool = wool
        this.numOfA = 0
        this.organs = 0
        this.hide = 0
        this.essence = 0
    }
    makeSpot() {
        let animalPen = document.getElementById('animalPen')
        let animalCard = document.createElement('div')
        animalCard.classList.add('animalCard')
        animalCard.innerHTML = `
        <strong>${this.name}</strong>
        <p id="${this.name}Owned">Owned: ${commaIncluded(this.numOfA)}</p>
        <button onClick="${this.name.toLowerCase()}.buyAnimal()">Buy ${this.name}</button>
        <p id="${this.name}Cost">Cost: ${commaIncluded(this.price)}</p>
        `
        animalPen.append(animalCard)
    }
    makeAltar() {
        let altarSpot = document.getElementById('altarSpot')
        let altarCard = document.createElement('div')
        let sacButton = document.createElement('button')
        sacButton.innerHTML = 'Sacrifice Animal'
        altarCard.classList.add('altarCard')
        sacButton.addEventListener('click', function () {
            sacrificeAnimal(sheep)
        })
        altarCard.innerHTML = `
         <strong>${this.name} Parts:</strong>
         <p id='${this.name}Organs'>Organs: ${this.organs}</p>
         <p id='${this.name}Hides'>Hides: ${this.hide}</p>
         <p id='${this.name}essences'>Essences: ${this.essence}</p>

        `
        altarCard.append(sacButton)
        altarSpot.append(altarCard)
    }
    makeWool() {
        woolCount = woolCount + (this.numOfA * this.wool)
        woolCounter.innerHTML = `Wool Count: ${commaIncluded(woolCount)}`
    }
    checkUnlock() {
    if (woolCount > this.price) {
        this.makeSpot()
        this.makeAltar()
        return true
    }
    }
    buyAnimal() {
        if (woolCount >= this.price) {
            console.log(this.price)
            woolCount -= this.price
            let toThePowerOf = Math.pow(1.15, this.numOfA);
            this.price = Math.trunc(this.increase * toThePowerOf)
            this.numOfA += 1
            document.getElementById(`${this.name}Owned`).innerHTML = `Owned: ${commaIncluded(this.numOfA)}`
            document.getElementById(`${this.name}Cost`).innerHTML = `Cost: ${commaIncluded(this.price)}`
        }
    }
}
//Lets create some animals!
let sheep = new Animal('Sheep', 20, 1, 22)
let show = new Animal('Show', 200, 10, 220)
let shickens = new Animal('Shickens', 2000, 100, 2200)
let shoats = new Animal('Shoats', 20000, 500, 22000)
let shigs = new Animal('Shigs', 1000000, 3000, 1100000)
let sheese = new Animal('Sheese', 10000000, 20000, 11000000)
let shucks = new Animal('Shucks', 100000000, 100000, 100000000)
let beeps = new Animal('Beeps', 1000000000, 2000000, 1000000000)


//Intervals from each of the animals
const stop = (interval) => clearInterval(interval)

const sheepScan = setInterval(() => {
    if(sheep.checkUnlock()) stop(sheepScan)
}, 5000)

const showScan = setInterval(() => {
    if(show.checkUnlock()) stop(showScan)
}, 5000)

const shickenScan = setInterval(() => {
    if(shickens.checkUnlock()) stop(shickenScan)
})

const shoatScan = setInterval(() => {
    if (shoats.checkUnlock()) stop(shoatScan)
}, 5000)

const shigScan = setInterval(() => {
    if (shigs.checkUnlock()) stop(shigScan)
}, 5000)

const sheeseScan = setInterval(() => {
    if (sheese.checkUnlock()) stop (sheeseScan)
}, 5000)

const shuckScan = setInterval(() => {
    if (shucks.checkUnlock()) stop(shuckScan)
}, 5000)

const beepScan = setInterval(() => {
    if (beeps.checkUnlock()) stop(beepScan)
}, 5000)