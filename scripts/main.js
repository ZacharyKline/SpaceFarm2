//Universal variables
let woolCounter = document.getElementById('woolCounter')
let commaIncluded = value => value.toLocaleString()
let woolCount = 0;
let bloodCount = 0;
let totalClicks = 0;
let timeValue = 1000;
let sacAmount = 1;



// This function swaps out the header for the page with an array of random funny stuff I'm collecting. Remember to update the random num variable as funnyText is added
function swapHeader() {
    let funnyHeaders = document.getElementById('headers')
    funnyHeaders.innerHTML = ''
    const headerText = [
        'A long time ago in a galaxy farm farm away',
        'In space no one can hear you bleet',
        'GOATS IN SPACE',
        'Earth Sheep are Easy',
        'Cold Vacuum of Space Creamery',
        'Roosters in space are constantly cawing',
        'Oh the cocklamity',
        'We kid you not',
        'In 3027 Old MadDonald had a farm, designation: EIEIO',
        'If it moos, we can kill it',
        'Out of left Asteroid Field',
        'Have you herd the one about the space sheep?',
        'Who feels like space chicken tonight?',
        'You got beef? We got beef.',
        'Space Farmers: More than meets the sty',
        'Our vehicles have tractor beams',
        'Laugh until you\'re hoarse',
        'We want a space pony for X-mas',
        'Only the finest space slop',
        'The crop circles are free',
        'Holy crop(s)',
        'You know you have to tell me if you\'re a c(r)op right?',
        'By shear coincidence'
    ]
    let randomNum = Math.floor(Math.random() * headerText.length)

    funnyHeaders.innerHTML = headerText[randomNum]
    
}

swapHeader()

const headerInterval = setInterval(swapHeader, 15000)

