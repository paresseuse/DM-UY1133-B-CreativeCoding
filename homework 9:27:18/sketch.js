var yPos;
var xPos;


function setup() {
  createCanvas(800,600);
  background(255);

  size = 5;

rectMode(CORNER);
  noFill();
  noStroke();


}

function draw() {


	for(var i = 0; i < 9; i++){
		var size = (i+1) * 20;
		xPos = i*45;

		fill(211);

		rect(xPos+20, 0, 20, height/2);
	}


	for(var j = 0; j < 6; j++){
		var size = (j+1) * 20;
		yPos = j*45;

		fill(255,240,85);
		rect(width/2, yPos + 40, width/2, 20);
	}

fill(255);
rect(0,height/2,width/2,height/2);

//diagonal pink lines
	for(var k = 0; k < 10; k++){
		var size = (k+1) * 20;
		xPos = k*50;

		fill(255,0,158);
		quad(xPos-100, 600, xPos+60, 300, xPos+80, 300, xPos-80, 600);

	}

fill(255);
rect(width/2, height/2,width/2,height/2);

//diagonal blue lines
	for(var l = 0; l < 10; l++){
		var size = (l+1) * 20;
		xPos = l*50;

		fill(0,153, 255);
		quad(xPos+475, 600, xPos+315, 300, xPos+295, 300, xPos+455, 600);
	}

//fix overlapping lines
fill(255);
rect(275,height/2,150,height/3);

fill(255,0,158);
		quad(150, 600, 310, 300, 330, 300,170, 600);
fill(255,0,158);
		quad(200, 600, 360, 300, 380, 300,220, 600);
fill(255,0,158);
		quad(250, 600, 410, 300, 430, 300,270, 600);
fill(255,0,158);
		quad(300, 600, 460, 300, 480, 300,320, 600);

fill(255);
rect(400,height/2,100,105);

fill(0,153, 255);
		quad(575, 600, 415, 300, 395, 300, 555, 600);
fill(0,153, 255);
		quad(625, 600, 465, 300, 445, 300, 605, 600);

//grid
fill(0);
	rect(0,0,width,25);
	rect(0,575,width,25);

	rect(width/2,0,25,height);
	rect(0,height/2,width,25);

	rect(0,0,25,height);
	rect(775,0,25,height);

}