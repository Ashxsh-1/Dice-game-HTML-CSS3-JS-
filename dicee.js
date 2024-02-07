



var randomNumber1 = Math.floor(Math.random() *6)+ 1;

var random_image1 = "dice" + randomNumber1 + ".png";

var random_imgsrc = "images/" + random_image1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",random_imgsrc);

var randomNumber2 = Math.floor(Math.random() *6)+ 1;
var random_image2 = "dice" + randomNumber2 + ".png" ;
var image_src2 = "images/" + random_image2 ;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , image_src2);


if(randomNumber1 == randomNumber2)
{
    document.querySelector("h1").innerHTML = "It's a tie";
}

else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 won this";


}

else {
    document.querySelector("h1").innerHTML
     = "player 2 has won !";
}
// // javascript in order to use QUERYSELECTORALL FOR THIS CASE...
// Copy code
// if (randomNumber1 === randomNumber2) {
//     document.querySelectorAll("h1").forEach(function(element) {
//         element.innerHTML = "It's a tie";
//     });
// } else if (randomNumber1 > randomNumber2) {
//     document.querySelectorAll("h1").forEach(function(element) {
//         element.innerHTML = "Player 1 won this";
//     });
// } else {
//     document.querySelectorAll("h1").forEach(function(element) {
//         element.innerHTML = "Player 2 has won!";
//     });
// }