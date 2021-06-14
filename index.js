var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage = "dice" +randomNumber1+ ".png";
var imageSource ="images/" +randomImage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", imageSource);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" +randomNumber2+ ".png";
var imageSource2 ="images/" +randomImage2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", imageSource2);
if(randomNumber1 > randomNumber2){
   document.querySelector('.h').innerHTML= "Player1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
   document.querySelector('.h').innerHTML="Player2 Wins!";
}
else{
   document.querySelector('.h').innerHTML="Match Draw!";
}
