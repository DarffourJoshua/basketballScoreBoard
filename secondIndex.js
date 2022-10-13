const fistPara = document.getElementById("first-para-el");

const secondPara = document.getElementById("second-para-el");

const foulH = document.getElementById("foul-home");

const foulG = document.getElementById("foul-guest")

const pEl = document.getElementById("period-el")

const zero = 0;
const one = 1;

let countHome = zero;
let countGuest = zero;
let countHomeFoul = zero;
let countGuestFoul = zero;
let countP = one;

function homeFoul(num = zero) {
    countHomeFoul += num
    foulH.textContent = countHomeFoul
}

function homeFoul(num = zero) {
    countHomeFoul += num
    foulH.textContent = countHomeFoul
}

function pOne(num = one) {
    countP += num;
    pEl.innerText = countP;
}

function guestFoul(num = zero) {
    countGuestFoul += num
    foulG.textContent = countGuestFoul
}

function homeNumCount(num) {
     countHome += num;
     fistPara.textContent = countHome;
}

function guestNumCount(num) {
    countGuest += num;
    secondPara.textContent = countGuest;
} 

function reset(zero) {
    countHome = zero;
    countGuest = zero;
    countHomeFoul = zero;
    countGuestFoul  = zero
    countP = 1;
    fistPara.textContent = zero;;
    secondPara.textContent = zero;;
    foulH.textContent = zero;
    foulG.textContent = zero;
    pEl.innerText = 1;
}
