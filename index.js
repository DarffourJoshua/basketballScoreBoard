// get home score ID
let firstParagragh = document.getElementById("first-para-el");

// get home score ID
let secondParagragh = document.getElementById("second-para-el");

// initialise a variable 
// for home score
let countHome = 0;

// initialise a variable 
// for guest score
let countGuest = 0;


// functions for home increment buttons
function plusOne() {
    countHome += 1;
    firstParagragh.textContent = countHome;
}

function plusTwo() {
    countHome += 2;
    firstParagragh.textContent = countHome;
}

function plusThree() {
    countHome += 3;
    firstParagragh.textContent = countHome;
}


// functions for guest increment buttons
function addOne() {
    countGuest += 1;
    secondParagragh.textContent = countGuest;
}

function addTwo() {
    countGuest += 2;
    secondParagragh.textContent = countGuest;
}

function addThree() {
    countGuest += 3;
    secondParagragh.textContent = countGuest;
}

function reset() {
    countGuest = 0;
    countHome = 0;
    firstParagragh.textContent = countHome;
    secondParagragh.textContent = countGuest
}
