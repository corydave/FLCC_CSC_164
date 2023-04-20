"use strict";

// Declare a list - it's OK if the list has no values yet.
let names = [];
document.getElementById("nameBox").focus();

function addName() {
    console.log("addName() has been called");
}

function showNames() {
    console.log("showNames() has been called");
}

function sortNames() {
    console.log("sortNames() has been called");
}

function reverseNames() {
    console.log("reverseNames() has been called");
}

function random() {
    console.log("random() has been called");
    window.alert(names[Math.floor(Math.random() * names.length)]);

    
    


}

function clearNames() {
    names = [];
    console.log("names = " + names);
    showNames();
}