

class Upgrade {
    constructor(name, target, req1, req2, req3, req4, bonus) {
        this.name = name
        this.target = target
        this.req1 = req1
        this.req2 = req2
        this.req3 = req3
        this.req4 = req4
        this.bonus = bonus
    }
    createUpgrade() {
        let upgradeSpot = document.getElementById('upgradeSpot')
        let upgradeCard = document.createElement('div')
        upgradeCard.classList.add('upgradeCard')
        upgradeCard.classList.add('card')


        upgradeSpot.append(upgradeCard)
    }
    unlock() {
        
    }
}
