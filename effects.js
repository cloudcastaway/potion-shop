const colors = ["#FFFFFF", "#F4C868", "#E893C4", "#CECBF6"]
const skyElementsSizes = ["sky-element-smaller", 
                          "sky-element-small", 
                          "sky-element-medium", 
                          "sky-element-large"]
const skyElementsTypes = ["circle", "star"]
const durations = [3, 5, 7, 9, 11]
let isPortraitAndSmall = window.matchMedia('(orientation: portrait) and (max-width: 1000px)').matches
let isLandscape = window.matchMedia('(orientation: landscape)').matches
let starsAndMoon = false
let starCount = Math.round(window.innerWidth / 25)


document.addEventListener('mousemove', (event) => {
    for (let i = 0; i < 2; i++) {
        const sparkle = document.createElement('div')
        const offsetX = (Math.random() - 0.5) * 35
        const offsetY = (Math.random() - 0.5) * 35

        const indexColor = Math.floor(Math.random() * colors.length)
        sparkle.style.backgroundColor = colors[indexColor]

        sparkle.className = 'trail-sparkle'
        sparkle.style.left = `${event.clientX + offsetX}px`
        sparkle.style.top = `${event.clientY + offsetY}px`
        document.body.appendChild(sparkle)
        setTimeout(() => sparkle.remove(), 4000)
    }
})


const renderSky = (elementsQt) => {
    for (let i = 0; i < elementsQt; i++) {
        const skyElement = document.createElement('div')
        const bookRect = document.getElementById('book-cover').getBoundingClientRect()
        let positionX = Math.random() * window.innerWidth
        let positionY = Math.random() * window.innerHeight
        const margin = 20

        while (positionX > bookRect.left + margin && positionX < bookRect.right - margin && 
              positionY > bookRect.top + margin && positionY < bookRect.bottom - margin - 130) {
                positionX = Math.random() * window.innerWidth
                positionY = Math.random() * window.innerHeight
              }

        const indexSize = Math.floor(Math.random() * skyElementsSizes.length)
        const elementTypeIndex = Math.floor(Math.random() * skyElementsTypes.length)
        const duration = durations[Math.floor(Math.random() * durations.length)]
        const delay = Math.floor(Math.random() * duration)

        skyElement.classList.add("sky-element", 
                                  skyElementsSizes[indexSize], 
                                  skyElementsTypes[elementTypeIndex])

        skyElement.style.animationDuration = `${duration}s`    
        skyElement.style.animationDelay = `${delay}s`              
        skyElement.style.left = `${positionX}px`
        skyElement.style.top = `${positionY}px`
        document.body.appendChild(skyElement)

    }
}


const renderMoon = () => {
    const moon = document.createElement("img")
    moon.src = "./assets/moon-image.png"
    moon.alt = "Full moon with purple spiral"

    moon.classList.add('moon-image')
    document.body.appendChild(moon)
}


const generateStarsAndMoon = (elementsQt) => {
    renderSky(elementsQt)
    renderMoon()
    starsAndMoon = true
}


const removeSky = () => {
    document.querySelectorAll(`.moon-image, .sky-element`).forEach((element) => {
        element.remove()
    })

    starsAndMoon = false
}


window.matchMedia('(orientation: portrait) and (max-width: 1000px)').addEventListener('change', (event) => {
    if (event.matches) {
        removeSky()
    } else {
        starCount = Math.round(window.innerWidth / 25)
        generateStarsAndMoon(starCount)
    }
})


if (!isPortraitAndSmall) {
    generateStarsAndMoon(starCount)
}

if (isLandscape) {
    generateStarsAndMoon(starCount)
}