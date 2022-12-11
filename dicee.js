var randomNumber1 = Math.floor(Math.random() * 6);
var imageArray=["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png","images/dice5.png", "images/dice6.png"];

document.querySelector(".img1").src=imageArray[randomNumber1];

var randomNumber2 = Math.floor(Math.random() * 6);
document.querySelector(".img2").src=imageArray[randomNumber2];
if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="Draw";
} else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins!";
} else{
    document.querySelector("h1").textContent="Player 2 Wins!";
}