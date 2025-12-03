const countHome = document.getElementById('count-home'); /*get the Home header from the html*/
const countGuest = document.getElementById('count-guest'); /*get the Guest header from the html*/
let homeScore = 0 /*set a variable to interact with the home score*/
let guestScore = 0 /*set a variable to interact with the guest score*/

function increaseHome1(){
    homeScore += 1 /*increment by 1 in the background once the button is clicked*/
    countHome.innerText = homeScore /*pass the incremented value to the countHome variable so that it shows to the header */
}

function increaseHome2(){
    homeScore += 2
    countHome.innerText = homeScore
}

function increaseHome3(){
    homeScore += 3
    countHome.innerText = homeScore
}

function increaseGuest1(){
    guestScore += 1
    countGuest.innerText = guestScore    
}

function increaseGuest2(){
    guestScore += 2
    countGuest.innerText = guestScore    
}

function increaseGuest3(){
    guestScore += 3
    countGuest.innerText = guestScore    
}

function homeReset() {
    let countStr = homeScore + " - "
    countHome.textContent += countStr
    homeScore = 0
    countHome.textContent = 0
}

function guestReset() {
    let countStr = guestScore + " - "
    countGuest.textContent += countStr
    guestScore = 0
    countGuest.textContent = 0
}