let hand = ["Rock","Paper","Scissors"];

function computerPlay(){
    let randNum = Math.floor(Math.random()*3);
    return hand[randNum];
}
