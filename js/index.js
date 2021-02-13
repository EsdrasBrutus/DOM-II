// Your code goes here
//1
let heading = document.querySelector('h1');

heading.addEventListener('mouseover', () => {
    heading.textContent = "It's the Magic SchoolBus!"
})

//2
let navitem = document.querySelector('.nav-link')
navitem.addEventListener('click', () => {navitem.style.color = 'green'
})

//3 
let busImg = document.querySelector('header img')
busImg.addEventListener('dblclick', () => {busImg.style.width = '1px'})

//4
let visual = document.querySelector('.content-section')

visual.addEventListener('mouseenter', () =>{
    visual.style.backgroundColor = 'grey'
});

//5
visual.addEventListener('mouseleave', () =>{
    visual.style.backgroundColor = 'white'})

//6
let h2 = document.querySelector('h2')
window.addEventListener('resize', () => {
    h2.textContent = 'Fun no matter the size!'
})

//7
let header = document.querySelector('header')
window.addEventListener('load', () =>{
    header.style.backgroundColor = 'yellow'
})

//8
window.addEventListener('scroll', () =>{
    header.style.visibility = 'hidden'
})

window.addEventListener('click', () =>{
    header.style.visibility = 'visible'
})

//9

let p = document.querySelector('p')

document.addEventListener('copy', () =>{
    alert("You copied some text!")
})

//10

let type = document.querySelector('.intro h2')
document.addEventListener('keydown', (e) =>{
    type.textContent = `You pressed  ${e.code}!`
})



//prevent the event propagation properly

let div = document.querySelector('.inverse-content')
let divImg = document.querySelector('.inverse-content img')


div.addEventListener('click', () =>{
    div.style.backgroundColor = 'darkgrey'
})

divImg.addEventListener('click', (event) =>{
    divImg.style.width = '50%'
    event.stopPropagation() 
})



//nav items don't refresh page
let nav = document.querySelectorAll('.nav-link')
nav.forEach(element=> element.addEventListener('click', event => event.preventDefault()))