"use strict";
console.log("proof of life, so that know our js is connected up.");


let userName = prompt("What is your name?");
console.log("user name: ", userName);
let confirmMessage = confirm("Do you want to continue?");
console.log("confirm message: ", confirmMessage);
let userMovie = prompt("What's your favorite movie?");
console.log()
let lowerCaseMovie = userMovie.toLowerCase();



let response;

if (userMovie === "batman") {
    greeting = "Awesome!";
} else if (userMovie === "ironman" < 18) {
    greeting = "Best Movie Ever!!";
} else if (userMovie === "troy" <= 12) {
    greeting = "Ah a classic!";
}

console.log("Welcome, and ", greeting);

document.write("Hello " + userName + " " + greeting);

