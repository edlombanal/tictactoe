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

function game(){
    console.log("Welcome to tic tac toe! Get ready for a 5 round game of tic tac toe!");
    let player;
    let comp;
    let result;
    let playerScore = 0;
    for (let i = 0; i < 4; i++) {
        console.log("Round "+(i+1)+", enter your weapon:")
        player = prompt();
        comp = computerPlay();
        console.log(capitalize(player)+" vs "+comp)
        result = singleRound(player,comp);
        console.log(result);
        if(result.search("win!")!=-1){
            playerScore++;
        }
    }
    console.log("Final Score:");
    console.log("Player: "+playerScore);
    console.log("Computer: "+(5-playerScore));
    if(playerScore>2){
        console.log("You won!!!");
    } else {
        console.log("You lost...")
    }
}

game();
