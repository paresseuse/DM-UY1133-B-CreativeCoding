var bubbleArray = [];
var strawArray = [];
var fizzArray = [];

var bgImg;

var fizzSound;
var popSound;
var strawSlurpSound;

function preload(){
bgImg = loadImage("assets/background.jpg");

strawSlurpSound = loadSound("assets/straw slurp.wav");
popSound = loadSound("assets/pop.wav");
fizzSound = loadSound("assets/fizz.wav");

}

function setup() {

	createCanvas(600,500);
	var listOfColors = [color(0,92,195),color(240,255,0),color(0,202,157)];

	for(var s = 0; s<9; s++){
		//create 9 straws with (x,y,width,height) arguments
		var x = 10+(50*s);
		var y = 0;
		var w = 15;
		var h = height;
		strawArray[s] = new Straw(x,y,w,h);
	}

	for(var i = 0; i<9; i++){
		//create 9 bubbles with (xPos, yPos, xVel, yVel, size) arguments
		var x = random(450,600);
		var y = random(0,490);
		bubbleArray[i] = new Ball(x,y,random(3,5),random(3,5),25);
	}

for(var f = 0; f<15; f++){
	//create 10 fizzies with (x, y, size, thisColor) arguments
	var x = random(0,420);
	var y = random(350,500);
	fizzArray[f] = new Fizz(x,y,random(75,150),listOfColors[int(random(0,listOfColors.length))]);
}

strawSlurpSound.play();
strawSlurpSound.loop();

}

function draw() {

	background(255);
	image(bgImg,0,0);

	//strawSlurpSound.play();

	for(var s = 0; s < strawArray.length; s++){
		strawArray[s].move();
		strawArray[s].display();
	}

	for(var i = 0; i < bubbleArray.length; i++){
		bubbleArray[i].move();
		bubbleArray[i].display();

	}

	for (var f = 0; f < fizzArray.length; f++){
		fizzArray[f].move();
		fizzArray[f].display();
	}

}


class Ball{ 
	constructor(x,y,velXVal,velYVal,r){

	this.x = x;
	this.y = y;
	this.xVel = velXVal*0.75;
	this.yVel = velYVal*0.75;
	this.r = r;
}

	move(){
		this.x = this.x += this.xVel; 
		this.y = this.y += this.yVel; 

		if(this.x <= 460 || this.x >= width){
			this.xVel *= -1;
		}
		if(this.y <= 0 || this.y >= height){
			this.yVel *= -1;
			popSound.play();
		}
	}

	display(){
		fill(0,246,255);
		stroke(0);
		strokeWeight(4);
		ellipse(this.x, this.y, this.r*2);
	}

}

class Straw{
	constructor(x,y,w,h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.speed = 0.5;
	}

	move(){
			this.x += random(-this.speed,this.speed);
}

	display(){
		fill(255,56,178);
		stroke(0);
		strokeWeight(4);
		rect(this.x,this.y,this.w,this.h);
	}
}

class Fizz{
	constructor(x,y,size,clr){
		this.x = x;
		this.y = y;
		this.size = size;
		this.sizeStep = 1;
		this.color = clr; 
	}

move(){
	this.size += this.sizeStep;
	if(this.size >= 150 || this.size <= 75){
			this.sizeStep *= -1;
		}
	if(this.size >= 150){
		fizzSound.play();
	}

}

	display(){
		fill(this.color);
		stroke(0);
		strokeWeight(4);
		ellipse(this.x,this.y,this.size,this.size);
	}
}

