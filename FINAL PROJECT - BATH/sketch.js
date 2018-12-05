var pinkBath;
var purpleBath;
var blueBath;
var bathCol;
var r,g,b;
var mouseColor;



function setup() {
	createCanvas(600,600);

	bathCol = color(r,g,b,255);
	pinkBath = color(255,168,207,255);
	purpleBath = color(173,168,255,255);
	blueBath = color(138,226,255,255);

	mouseColor = get(mouseX, mouseY);

}

function mousePressed(){

var mouseColor;
mouseColor = get(mouseX, mouseY);
console.log(mouseColor);


	if(mouseColor == pinkBath){
		console.log("mouseColor is pinkBath");
		r = 255;
		g = 168;
		b = 207;
	}
	else if (mouseColor == purpleBath){
		console.log("mouseColor is purpleBath");
		r = 173;
		g = 168;
		b = 255;
	}
	else if (mouseColor == blueBath){
		console.log("mouseColor is blueBath");
		r = 138;
		g = 226;
		b = 255;
	}
	else{
		console.log("regular");
		r = 200;
		g = 200;
		b = 200;
	}

}

function draw(){

	push();
	noStroke();
	fill(pinkBath);
	rect(50,100,50,100);
	pop();

	push();
	noStroke();
	fill(purpleBath);
	rect(75,250,50,100);
	pop();

	push();
	noStroke();
	fill(blueBath);
	rect(50,450,50,100);
	pop();

	push();
	fill(bathCol);
	ellipse(575,400,750,800);
	pop();

	ellipse(550,400,800,850);

}


