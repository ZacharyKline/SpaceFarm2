function sacrificeAnimal(animal) {
        if (animal.numOfA >= sacAmount) {
            animal.numOfA -= sacAmount;
            let toThePowerOf = Math.pow(1.15, (animal.numOfA - 1));
            animal.price = Math.trunc(animal.price + (animal.price * 0.1) * toThePowerOf)
            document.getElementById(`${animal.name}Owned`).innerHTML = `Owned: ${commaIncluded(animal.numOfA)}`
            document.getElementById(`${animal.name}Cost`).innerHTML = `Cost: ${commaIncluded(animal.price)}`
            bloodCount += 1;
            let randomChance = Math.floor(Math.random() * 100) + 1
            if (randomChance > 50) {
                animal.organs += 1
            } else {
                animal.organs += 2
            }
            if (randomChance >= 65) {
                animal.hide += 1
         		}
            if (randomChance >= 80) {
                    animal.essence += 1
                }

        }
        document.getElementById(`${animal.name}Organs`).innerHTML = `Organs: ${animal.organs}`
        document.getElementById(`${animal.name}Hides`).innerHTML = `Hides: ${animal.hide}`
        document.getElementById(`${animal.name}essences`).innerHTML = `Essences: ${animal.essence}`
        }