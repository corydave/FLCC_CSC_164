"use strict";

// window.alert('hi');

// items = ["eggs", "bacon", "milk", "chocolate chips"]
//             0       1        2            3
let items = [];

function addItem() {
    
    // Get item from the textbox
    let tempItem = document.getElementById("itemToAdd").value;
    
    // Check to see that the textbox is not empty
    if (tempItem.length > 0) {
        // Add the item to the array `items[]`
        items.push(tempItem);    
    }
    
    // DEBUG - Show all values in `items`
    console.log(items);

    // Clear the textbox
    document.getElementById("itemToAdd").value = "";

    // Clear the id `listItems`
    document.getElementById("listItems").innerHTML = "";
    items.sort();

    // Get each item from the array and add it to the id `listItems`
    for (let i = 0; i < items.length; i++) {
        document.getElementById("listItems").innerHTML += "&#9634; " + items[i] + "<br />";
    }



}