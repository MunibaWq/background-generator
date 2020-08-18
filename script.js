var css = document.querySelector("h3");
var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randBtn = document.querySelector("button");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " + c1.value 
	+ ", " + c2.value +")";

	css.textContent = body.style.background + ";";
}

function randomColor(){
	var rand = "0123456789ABCDEF";
	var value = "#";

	for(var i = 0; i<6 ; i++){
		value = value + rand[Math.floor(Math.random() * 16)];
	}
	return value;
}


function randomizeBackground(){
	c1.value = randomColor();
	c2.value = randomColor();
	setGradient();
}


c1.addEventListener("input", setGradient);

c2.addEventListener("input", setGradient);


randBtn.addEventListener("click", randomizeBackground);


