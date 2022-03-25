let hand = ["Rock","Paper","Scissors"];

function computerPlay(){
    let randNum = Math.floor(Math.random()*3);
    return hand[randNum];
}

function capitalize(word){
    let str = word;
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}


function singleRound(player,comp){
    let play = capitalize(player);
    console.log("Player chooses "+play);
    console.log("Computer chooses "+comp);
    if(play === comp){
        return "Tie!";
    } else {
        switch(play){
            case 'Rock':
                if(comp === "Paper"){
                    return "You lose! Paper beats Rock!"
                } else {
                    return "You win! Rock beats Scissors!"
                }
                break;
            case 'Paper':
                if(comp === "Scissors"){
                    return "You lose! Scissors beats Paper!"
                } else {
                    return "You win! Paper beats Rock!"
                }
                break;
            case 'Scissors':
                if(comp === "Rock"){
                    return "You lose! Rock beats Scissors!"
                } else {
                    return "You win! Scissors beats Paper!"
                }
                break;
        }
    }
}

