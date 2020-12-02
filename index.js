var randomNumber1=Math.floor((Math.random()*6))+1;
var rdiceimage="dice" + randomNumber1 +".png"
document.querySelectorAll("img")[0].setAttribute("src",rdiceimage);

var random2=Math.floor((Math.random()*6))+1;
var rdiceimage2="dice" + random2 +".png"
document.querySelectorAll("img")[1].setAttribute("src",rdiceimage2);


if (randomNumber1 > random2){
  document.querySelector("h1").innerHTML="PLAYER 1 WON"
}
if (randomNumber1 < random2){
  document.querySelector("h1").innerHTML="PLAYER 2 WON"
}
if (randomNumber1 === random2){
  document.querySelector("h1").innerHTML="ITS A DRAW"
}
