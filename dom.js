
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