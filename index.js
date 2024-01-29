let isAlive = true;
let hasblackjack = false;

let sum = 0;

let cardEl = document.getElementById("cards-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");




function startgame(){
    isAlive = true;
    hasblackjack = false;
    messageEl.textContent = " Do you want to draw a new card?";
    let card1 = Math.floor(Math.random() * 10) + 1;
    let card2 = Math.floor(Math.random() * 10) + 1;
    sum = card1+card2;
    cardEl.textContent = "Cards: "+ card1+" "+card2 +" ";
    sumEl.textContent = "Sum:"+sum;
    
}


function newcard() {
    let random_number = Math.floor(Math.random() * 10) + 1;

    cardEl.textContent += random_number +" ";    
    
    sum = sum + random_number;
    sumEl.textContent = "Sum:"+sum;

    // stopping();
}

function renderGame() {
    newcard();
    if (sum < 21) {
        messageEl.textContent = "Do you want to draw a new card?";
        
    } else if (sum === 21) {
        messageEl.textContent = "You got the blackjack!";
        hasblackjack = true;
    } else {
        messageEl.textContent = "You are out of the game!";
        isAlive = false;
      
    }
}

function stopping(){
    if(isAlive === true && hasblackjack === false){
        renderGame();
    }
}



