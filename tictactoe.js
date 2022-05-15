function computerPlay(){
    let randNum = Math.floor(Math.random()*3);
    return hand[randNum];
}

function singleRound(player,comp){
    if(player === comp){
        return 0;
    } else {
        switch(player){
            case 'rock':
                if(comp === "paper"){
                    return 2;
                } else {
                    return 1;
                }
                break;
            case 'paper':
                if(comp === "scissors"){
                    return 2;
                } else {
                    return 1;
                }
                break;
            case 'scissors':
                if(comp === "rock"){
                    return 2;
                } else {
                    return 1;
                }
                break;
        }
    }
}

// game

let result;
let playerScore = 0;
let pcScore = 0;
let ties = 0;
let handSelected = 'n';
let pcHand = 'n';
let hand = ["rock","paper","scissors"];

// event listeners

const imgs = document.querySelectorAll('.pb');
const cimgs = document.querySelectorAll('.cb');
const play = document.querySelector('.play');
const resultMsg = document.querySelector('#winner');
const ps = document.querySelector('#ps');
const cs = document.querySelector('#cs');
const overlay = document.querySelector('.overlay');
const decision = document.querySelector('#decision');
const playagain = document.querySelector('#playagain');

imgs.forEach(i => {
    i.addEventListener('click',function(){
        if(i.classList.contains('activeimg')){
            i.classList.remove('activeimg');
            handSelected = 'n';
        }else{
            imgs.forEach(e => {
                e.classList.remove('activeimg');
            })
        i.classList.add('activeimg')
        handSelected = i.id;
        console.log(handSelected);
        }
        cimgs.forEach(e => {
            e.classList.remove('activeimg');
        });
    });
});

play.addEventListener('click',() => {
    cimgs.forEach(e => {
        e.classList.remove('activeimg');
    });
    if(handSelected!=='n'){
        pcHand = computerPlay();   
        cimgs.forEach(i => {
            if(i.id==pcHand){
                i.classList.add('activeimg');
            }
        });
        result = singleRound(handSelected,pcHand);
        switch(result){
            case 0:
                //tie
                resultMsg.textContent = "It's a tie!";
                break;
            case 1:
                //player
                resultMsg.textContent = "You won!";
                playerScore++;
                break;
            case 2:
                //computer
                resultMsg.textContent = "You lost...";
                pcScore++;
                break;
        }
    }else{
        alert('Pick a hand!');
    };
    cs.textContent = pcScore;
    ps.textContent = playerScore;
    if(pcScore===5){
        decision.textContent = "You lost... "
        overlay.style.display = 'flex'
    }
    if(playerScore===5){
        decision.textContent = "You won! "
        overlay.style.display = 'flex'
    }
});

playagain.addEventListener('click', () => {
    cimgs.forEach(e => {
        e.classList.remove('activeimg');
    });
    imgs.forEach(e => {
        e.classList.remove('activeimg');
    });
    playerScore=0;
    pcScore=0;
    cs.textContent = pcScore;
    ps.textContent = playerScore;
    resultMsg.textContent = "Pick a hand, then click play.";
    overlay.style.display = 'none';
});
