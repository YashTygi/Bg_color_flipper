const bgcolor = ["red", "green", "#1e377f", "rgb(180,187,196)", "rgb(196,131,212)", "#00CC66"]
const button = document.getElementById("btn");
const color = document.querySelector("#color");

button.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = bgcolor[randomNumber];
    color.textContent = bgcolor[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * bgcolor.length);
}