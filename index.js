var randomNumber1 = Math.floor((Math.random()*6)+1);
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2 = Math.floor((Math.random()*6)+1);
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2){
    document.querySelector("div h1").textContent = "🚩 Play 1 Wins!"
}
if (randomNumber1 < randomNumber2){
    document.querySelector("div h1").textContent = "Player 2 Wins!🚩!"
}
if (randomNumber1 === randomNumber2){
    document.querySelector("div h1").textContent = "Draw!"
}
