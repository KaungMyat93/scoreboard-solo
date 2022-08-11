let homeScore = 0
let guestScore = 0

let scoreEl1 = document.getElementById("score-el1")

let scoreEl2 = document.getElementById("score-el2")

function plusOne1() {
    homeScore +=  1
    scoreEl1.textContent = homeScore
}

function plusOne2() {
    guestScore +=  1
    scoreEl2.textContent = guestScore
}

function plusTwo1() {
    homeScore +=  2
    scoreEl1.textContent = homeScore
}

function plusTwo2() {
    guestScore +=  2
    scoreEl2.textContent = guestScore
}

function plusThree1() {
    homeScore +=  3
    scoreEl1.textContent = homeScore
}

function plusThree2() {
    guestScore +=  3
    scoreEl2.textContent = guestScore
}

function reset() {
    scoreEl1.textContent = 0
    scoreEl2.textContent = 0
    homeScore = 0
    guestScore = 0
}