var  randomNumber1 = Math.random()*6//Math.floor()+1;
 randomNumber1 = Math.floor(randomNumber1)+1
console.log(randomNumber1)
var randomImageSrc1 = "dice"+ randomNumber1+ ".png" 
let img1 =document.querySelector(".img1")
    img1.setAttribute("src",randomImageSrc1);
    var randomNumber2 = Math.random()*6;
    randomNumber2 = Math.floor(randomNumber2)+1
    console.log(randomNumber2)  
    var randomImageSrc2 = "dice"+randomNumber2+".png";
let img2=document.querySelector(".img2")
img2.setAttribute("src",randomImageSrc2)
const h1 = document.querySelector("h1")
if(randomNumber1===randomNumber2){
    h1.innerText= "draw"
}else if(randomNumber1>randomNumber2){
    h1.innerText ="Player 1 win"
}else if(randomNumber1<randomNumber2){
    h1.innerText ="Player 2 win"
}
console.log(h1.innerText)
