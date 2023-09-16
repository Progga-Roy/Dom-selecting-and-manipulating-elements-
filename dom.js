
// getElementsByTagName - option1
const headerCollection = document.getElementsByTagName('h1')
for (const h1 of headerCollection) {
    // console.log(h1)
    console.log(h1.innerText)
}

// getElementsByTagName - option2
const liCollection = document.getElementsByTagName('li')
// console.log(liCollection)
for (const li of liCollection) {
    console.log(li.innerText)
}
// getElementsById 
const getId = document.getElementById('fruit-title')
console.log(getId)
// for (const id of getId) {
//     console.log(id)
    
// }

// getElementsByClassName
const getClass = document.getElementsByClassName('dom')
for(const findClass of getClass){
console.log(findClass.innerText)
}

// querySelectorAll
const someLi = document.querySelectorAll('.places')
for (const sLi of someLi) {
    console.log(sLi.innerText)
}
// querySelector
const someLis = document.querySelector('#fruit-title')
console.log(someLis)


//  change property using Style
const styleDress = document.getElementById('dress')
styleDress.style.backgroundColor = 'black'
styleDress.style.textAlign = 'center'
styleDress.textContent = 'I have huge dress collection'
styleDress.style.color ='white'
styleDress.style.padding ='10px 10px'
styleDress.style.boxShadow ='10px 10px 5px grey'


// console.log(styleDress)

// get and setAttribute
const findDress = document.getElementById('dress')
// findDress.getAttribute('id')
findDress.setAttribute('title',' tooltip My favorite dresses which I usually ware.')

// console.log(findDress)


// user innerHTML for change title
const fruit = document.getElementsByClassName('fruits-container')[0].innerHTML ='<h2>Fruit title become flower title, what a change!!</h2>'

console.log(fruit)


