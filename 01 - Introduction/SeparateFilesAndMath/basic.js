"use strict";

// declare `constants` to reference page elements
// const inputName = document.getElementById('nameInput');
const inputName = document.querySelector("#nameInput");

// In a collision of multiple elements, querySelector chooses the
// first occurance
const messageText = document.querySelector("p");

console.log(messageText);

function getNameAndDisplay() {
    messageText.innerHTML = "Hi, " + inputName.value;
}



// let a = "dave";
// let b = 'dave';
// let c = `this
// is
// a

// test`;


