const sections = document.querySelectorAll('section')
for (const section of sections) {
    section.style.border = '2px solid purple'
    section.style.marginTop = '20px'
    section.style.borderRadius = '8px'
    // section.style. = '8px'

    
}
// console.log(sections)

// const placesContainer = document.getElementById('places-container')
// placesContainer.style.backgroundColor = 'pink'


const placesContainer = document.getElementById('places-container')
placesContainer.classList.add('places')
placesContainer.classList.remove('places')