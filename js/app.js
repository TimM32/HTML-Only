"use strict";
console.log("proof of life, so that know our js is connected up.");


let userName = prompt("What is your name?");
console.log("user name: ", userName);
let confirmMessage = confirm("Do you want to continue?");
console.log("confirm message: ", confirmMessage);
let lowerCaseMovie = userMovie.toLowerCase();

getMovieName();

function getMovieName() {
    let userMovie = prompt("what's your favorite movie?");
    let response;

    if (userMovie === "batman") {
        response = "Awesome!";
    } else if (userMovie === "ironman") {
        response = "Best Movie Ever!!";
    } else if (userMovie === "troy") {
        response = "Ah a classic!";
    } else {
        response = "Great Choice!";
    }
    console.log("response", response);
    return response;
}


