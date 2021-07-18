
// basic upgrade algorithm
// wool = 10
// 50% upgrade
// wool = wool + (wool * .5)
// wool = 15

class Upgrade {
    constructor(upName, target, req1, req2, req3, req4, req5, bonus, code) {
        this.upName = upName
        this.target = target
        this.req1 = req1
        this.req2 = req2
        this.req3 = req3
        this.req4 = req4
        this.req5 = req5
        this.bonus = bonus
        this.code = code
    }
    createUpgrade() {
        let upgradeSpot = document.getElementById('upgradeSpot')
        let upgradeCard = document.createElement('div')
        let buyButton = document.createElement('button')
        upgradeCard.classList.add('upgradeCard')
        upgradeCard.classList.add('card')
        upgradeCard.innerHTML = this.upName
        buyButton.innerHTML = `Buy Upgrade`
        buyButton.addEventListener('click', this.buyUpgrade)
        buyButton.id = `${this.target.name}${this.code}`
        upgradeCard.append(buyButton)
        upgradeSpot.append(upgradeCard)
    }
    checkUnlock() {
        if (this.target.numOfA >= this.req5) {
            console.log('hello')
            this.createUpgrade()
            return true
        }
    }
    buyUpgrade = () => {
        console.log(this)
        if (this.checkRequirements()) {
            let getButton = document.getElementById(`${this.target.name}${this.code}`)
            woolCount -= this.req1
            this.target.organs -= this.req2
            this.target.hide -= this.req3
            this.target.essence -= this.req4
            woolCounter.innerHTML = `Wool Count: ${commaIncluded(woolCount)}`
            document.getElementById(`${this.target.name}Organs`).innerHTML = `Organs: ${this.target.organs}`
            document.getElementById(`${this.target.name}Hides`).innerHTML = `Hides: ${this.target.hide}`
            document.getElementById(`${this.target.name}essences`).innerHTML = `Essences: ${this.target.essence}`
            this.target.wool = this.target.wool * this.bonus
            getButton.classList.add('used')
            getButton.removeEventListener('click', this.buyUpgrade)
        }
    }
    checkRequirements() {
        if (this.checkWool() && this.checkReq2() && this.checkReq3() && this.checkReq4()) {
            return true
        }
        return false
    }
    checkWool() {
        return this.req1 <= woolCount ? true : false
    }
    checkReq2() {
        return this.req2 <= this.target.organs ? true : false
    }
    checkReq3() {
        return this.req3 <= this.target.hide ? true : false
    }
    checkReq4() {
        return this.req4 <= this.target.essence ? true : false
    }
}

let sheepUp1 = new Upgrade('Copper Fleece', sheep, 10, 4, 1, 0, 10, 2, 001)

const checkForUpgrade1 = setInterval(() => {
    if(sheepUp1.checkUnlock()) stop(checkForUpgrade1)
}, 5000)
