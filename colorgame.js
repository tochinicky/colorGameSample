//initial generated static colors
// var colors = [
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)",
// 	"rgb(0, 255, 0)",
// 	"rgb(255, 0, 0)"
// ]
var numSquares= 6;
var colors = generateRandomColors(numSquares);
var square= document.querySelectorAll(".square");
//initial pickedColor
// var pickedColor= colors[3];
var pickedColor=randomColor();
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay= document.getElementById("message");
var h1= document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors= generateRandomColors(numSquares);
	pickedColor=randomColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < square.length; i++) {
		if (colors[i]) {
			square[i].style.backgroundColor=colors[i];
		}else{
			square[i].style.display="none";
		}
	}
	// body...
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6
	colors= generateRandomColors(numSquares);
	pickedColor=randomColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < square.length; i++) {
			square[i].style.backgroundColor=colors[i];
			square[i].style.display="block";
		}
	// body...
});




resetButton.addEventListener("click", function() {
	messageDisplay.textContent="";
	this.textContent="New colors";
	// generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor=randomColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	//change colors of squares
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor= "steelblue";
});

colorDisplay.textContent=pickedColor;
for (var i = 0; i < square.length; i++) {
	//add initial colorz to squares
	square[i].style.backgroundColor=colors[i];

	//add click listeners to squares
	square[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor= this.style.backgroundColor;
		// compare color to picked color
		if (clickedColor===pickedColor) {
			messageDisplay.textContent="Correct!";
			resetButton.textContent="Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent= "Try Again";
		}
	});
}
function changeColors(color) {
	// loop through all squares
	for (var i = 0; i < square.length; i++) {
		//change each color to match given color
		square[i].style.backgroundColor=color;
	}
}
function randomColor() {
	// body...
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num) {
	// make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColors());
	}
	return arr;
}
function randomColors() {
	// pick a "red" from 0-255
	var r= Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g= Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b= Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}