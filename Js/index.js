// declaring and initializing variables

let homeScore = 0;
let guestScore = 0;
let homeScoreBoard = document.getElementsByClassName("score-board")[0];
let guestScoreBoard = document.getElementsByClassName("score-board")[1];



function incrementButton1() {
    homeScore += 1
    homeScoreBoard.textContent = homeScore;
}

function incrementButton2() {
    homeScore += 2
    homeScoreBoard.textContent = homeScore;
}

function incrementButton3() {
    homeScore += 3
    homeScoreBoard.textContent = homeScore;
}

function incrementButton4() {
    guestScore += 1
    guestScoreBoard.textContent = guestScore
}

function incrementButton5() {
    guestScore += 2
    guestScoreBoard.textContent = guestScore
}

function incrementButton6() {
    guestScore += 3
    guestScoreBoard.textContent = guestScore
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    homeScoreBoard.textContent = homeScore;
    guestScoreBoard.textContent = guestScore;
}

