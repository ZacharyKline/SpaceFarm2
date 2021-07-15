let shearButton = document.querySelector('#shearButton')
shearButton.addEventListener('click', shearWool)

function shearWool(event) {
    console.log('clicky')
    randomNum = Math.floor(Math.random() * 100)
    woolCount += 1
    woolCounter.innerHTML = `Wool Count: ${commaIncluded(woolCount)}`
}

function animalAccumulator(animal) {
            // recursive function to dynamically alter time based off of sheep count
            setTimeout(() =>{
                // only 0 or 1 wool per increment of time based on sheep count
              animal.makeWool(animal.numOfA >= 1 ? 1 : animal.numOfA);
                // recurse!
                animalAccumulator(animal)
            }, (timeValue - animal.numOfA)/(animal.numOfA))
            // formula acquired from logistics function 
        }
animalAccumulator(sheep)
animalAccumulator(show)
animalAccumulator(shickens)
animalAccumulator(shoats)
animalAccumulator(shigs)
animalAccumulator(sheese)
animalAccumulator(shucks)
animalAccumulator(beeps)