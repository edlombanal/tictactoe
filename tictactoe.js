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
    console.log("Welcome to Rock Paper Scissors! Get ready for a 5 round game of Rock Paper Scissors!");
    let player;
    let comp;
    let result;
    let playerScore = 0;
    let pcScore = 0;
    let ties = 0;
    for (let i = 1; i <= 5; i++) {
        console.log("Round "+(i)+", enter your weapon:")
        player = prompt();
        comp = computerPlay();
        console.log(capitalize(player)+" vs "+comp)
        result = singleRound(capitalize(player),comp);
        console.log(result);
        if(result.search("win!")!=-1){
            playerScore++;
        }else if(result.search("Tie")!=-1){
            ties++;
        }
    }
    pcScore = 5-playerScore-ties;
    console.log("Final Score:");
    console.log("Player: "+playerScore);
    console.log("Computer: "+(pcScore));
    if(playerScore>pcScore){
        console.log("You won!!!");
    } else if(pcScore==playerScore){
        console.log("You tied.");
    } else {
        console.log("You lost...");
    };
}

game();
