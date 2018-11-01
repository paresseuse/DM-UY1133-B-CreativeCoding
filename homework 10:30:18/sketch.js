var b1; // object variable
var b2;
var b3;
var b4;

function setup() {

	createCanvas(400,400);

	var c1 = color(226,125,158);
	var c2 = color(111, 174, 97);
	var c3 = color(104,147,206);
	var c4 = color(188,135,205);

	// initializes the new object from the class Ball
	b1 = new Ball(100, 10, 2, 3, 90, c1);

	b2 = new Ball(50, 200, 6, 2, 50, c2);

	b3 = new Ball(350,75, 3, 4, 35, c3);

	b4 = new Ball(150, 50, 2, 5, 75, c4);
    
}

function draw() {

	background(255,193,142);
	noStroke();

	b1.animate();
	b2.animate();
	b3.animate();
	b4.animate();

	b1.displayBall();
	b2.displayBall();
	b3.displayBall();
	b4.displayBall();
}

// definition of the Ball class
function Ball(xVal, yVal, velXVal, velYVal, size, thisColor){ //Class constructor

	this.x = xVal;
	this.y = yVal;
	this.xVel = velXVal;
	this.yVel = velYVal;
	this.size = size;
	this.sizeStep = 1;
	this.color = thisColor;

	this.animate = function(){
		this.x += this.xVel;
		this.y += this.yVel;

		if(this.x <= 0 || this.x >= width){
			this.xVel *= -1;
		}
		if(this.y <= 0 || this.y >= height){
			this.yVel *= -1;
		}

		this.size += this.sizeStep;
		if(this.size >= 120 || this.size <= 30){
			this.sizeStep *= -1;
		}
	}

	this.displayBall = function(){
		fill(this.color);
		ellipse(this.x, this.y, this.size, this.size);
	}

}; 

