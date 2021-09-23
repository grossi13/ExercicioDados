
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

sourceImageRandom = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", sourceImageRandom);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

sourceImageRandom2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", sourceImageRandom2);

if(randomNumber1 > randomNumber2){
        //numero 1 ganhou
        document.querySelector("h1").innerHTML = "☝ Player 1 WON !";
} else if(randomNumber2 > randomNumber1){
        // numero 2 ganhou
        document.querySelector("h1").innerHTML = "✌ Player 2 WON !";
} else {
        //empate
        document.querySelector("h1").innerHTML = "👀 DRAW !";
       
}