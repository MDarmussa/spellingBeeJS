'use strict';
//get the div items in the game
const gameDiv = document.getElementById("game");
const wordDiv = document.getElementById("word");
const letterDiv = document.getElementById("letters");
const loadDiv = document.getElementById("loadingBee");

// get the div items in the wordsBank
const wordsBankDiv = document.querySelector("#wordsBank");
const foundTitleDiv = document.querySelector("#foundTitle");
const wordsDiv = document.querySelector("#words");

//create your buttons
const a_button = document.createElement("button");
a_button.setAttribute("id", "a_button");
a_button.setAttribute("value", "A");
a_button.classList.add("button","is-warning", "m-2");
a_button.innerHTML = "A";

const b_button = document.createElement("button");
b_button.setAttribute("id", "b_button");
b_button.setAttribute("value", "B");
b_button.classList.add("button", "is-warning", "m-2");
b_button.innerHTML = "B";

const c_button = document.createElement("button");
c_button.setAttribute("id", "c_button");
c_button.setAttribute("value", "C");
c_button.classList.add("button", "is-warning", "m-2");
c_button.innerHTML = "C";

const d_button = document.createElement("button");
d_button.setAttribute("id", "d_button");
d_button.setAttribute("value", "D");
d_button.classList.add("button", "is-warning", "m-2");
d_button.innerHTML = "D";

const e_button = document.createElement("button");
e_button.setAttribute("id", "e_button");
e_button.setAttribute("value", "E");
e_button.classList.add("button", "is-warning", "m-2");
e_button.innerHTML = "E";

const f_button = document.createElement("button");
f_button.setAttribute("id", "f_button");
f_button.setAttribute("value", "F");
f_button.classList.add("button", "is-warning", "m-2");
f_button.innerHTML = "F";

const addButton = document.createElement('div');
addButton.setAttribute("id", "add-button");
addButton.classList.add("button", "is-black");
addButton.innerHTML = "ADD";

//write the function to add the buttons to your HTML on page load
//** NOTE: setTimeout is just to slow the load so you can see it. but you could use it to add a CSS loaders and other neat stuff!! :)

//using EventListener "DOMContentLoaded", load the add buttons
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        gameDiv.appendChild(addButton)
    }, 3500)
});

//using an IIFE, load the letter button
//Why did I put the letters in the IFFE??  HINT: LOOK AT THE CONSOLE LOG AND SEE WHEN IT FIRES.
(() => {
setTimeout(() => {
    loadDiv.classList.toggle('hide');
    wordDiv.classList.toggle('hide');
    wordsBankDiv.classList.toggle('hide');
    letterDiv.appendChild(a_button);
    letterDiv.appendChild(b_button);
    letterDiv.appendChild(c_button);
    letterDiv.appendChild(d_button);
    letterDiv.appendChild(e_button);
    letterDiv.appendChild(f_button);
}, 3000)
})();

//Step-3 write the listeners to take a letter and add to your word div


//add a function to take your word from the word div and add it to an Array to then add to your Words Bank



