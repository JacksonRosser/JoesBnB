document.getElementById('mainTitle').innerHTML = "Joe's Bed and Breakfast"
document.querySelector('#slogan').innerText = "Where the Food is Good and the Beds are Warm"
let theDate = new Date()

document.querySelector('h4').insertAdjacentText('beforeend', theDate.toLocaleDateString())

let userName = prompt("What is your name?")
let welcomeMessage = `Hello ${userName}, welcome to the best B&B around!`
document.querySelector('#welcomeMessage').innerText = welcomeMessage