//Creative Coding Midterm by Amelia Radhiya

var myFont;
var mySong;

var myString = "";

var winterImg1, winterImg2, winterImg3, winterBg;

var springImg1, springImg2, springImg3, springBg;

var summerImg1, summerImg2, summerImg3,summerBg;

var fallImg1, fallImg2, fallImg3, fallBg;
var imageState = 0;

//for weather
var quantity = 350;
var xPosition = [];
var yPosition = [];
var flakeSize = [];
var direction = [];
var minFlakeSize = 1;
var maxFlakeSize = 5;


function preload(){

	mySong = loadSound("assets/snowbyziont.mp3");
	myFont = loadFont("assets/Butler_Light.otf");

	winterImg1 = loadImage("assets/winter1.png");
	winterImg2 = loadImage("assets/winter2.png");
	winterImg3 = loadImage("assets/winter3.png");
	winterBg = loadImage("assets/winterbg.jpg");

	springImg1 = loadImage("assets/spring1.png");
	springImg2 = loadImage("assets/spring2.png");
	springImg3 = loadImage("assets/spring3.png");
	springBg = loadImage("assets/springbg.jpg");

	summerImg1 = loadImage("assets/summer1.png");
	summerImg2 = loadImage("assets/summer2.png");
	summerImg3 = loadImage("assets/summer3.png");
	summerBg = loadImage("assets/summerbg.jpg");

	fallImg1 = loadImage("assets/fall1.png");
	fallImg2 = loadImage("assets/fall2.png");
	fallImg3 = loadImage("assets/fall3.png");
	fallBg = loadImage("assets/fallbg.jpg");

}

function setup(){

  createCanvas(800,500);
  frameRate(27);
  noStroke();

  textFont(myFont);
  textSize(20);
  textAlign(CENTER);

  mySong.play();
	mySong.loop();

for(var k = 0; k < quantity; k++) {
    flakeSize[k] = round(random(minFlakeSize, maxFlakeSize));
    xPosition[k] = random(0, width);
    yPosition[k] = random(0, height);
    direction[k] = round(random(0, 1));
  }
}



function draw(){

background(winterBg);

//for sprite animation
var count = frameCount % 11;
if(count == 0){
	imageState++;
	if(imageState > 3){
		imageState=0;
	}
}

if(myString == ""){
	push();
	fill(255);
	text("type 'spring' to start changing seasons", width/2, 25);
	pop();
}
//spring
	else if(myString == "spring" || myString == "springs" || 
		myString == "springsu" || myString == "springsum" || 
		myString == "springsumm" || myString == "springsumme"){

		background(springBg);
		text("type 'summer' to change seasons", width/2,25);

	}
//summer
	else if(myString == "springsummer" || myString == "springsummera" || 
		myString == "springsummerau" || myString == "springsummeraut" || 
		myString == "springsummerautu" || myString == "springsummerautum"){
		background(summerBg);
		text("type 'autumn' to change seasons", width/2, 25);
	}

//autumn
	else if(myString == "springsummerautumn" || myString == "springsummerautumnw" || 
		myString == "springsummerautumnwi" || myString == "springsummerautumnwin" || 
		myString == "springsummerautumnwint" || myString == "springsummerautumnwinte"){
		background(fallBg);
		text("type 'winter' to change seasons", width/2, 25);
	}

	else if(myString == "springsummerautumnwinter"){
		background(winterBg);

		text("end of seasons cycle :)", width/2, 25);
	}

	drawWeather();
	drawSprite();

	push();
	textSize(35);
	fill(255);
	text(myString,width/2,450);
	pop();

}

function keyPressed(){
	myString += key;
}


function drawSprite(){
//spring
	if(myString == "spring" || myString == "springs" || 
		myString == "springsu" || myString == "springsum" || 
		myString == "springsumm" || myString == "springsumme"){
		switch(imageState){
		case 0:
			image(springImg1,300,200);
			break;
		case 1:
			image(springImg2,300,200);
			break;
		case 2:
			image(springImg1,300,200);
			break;
		case 3:
			image(springImg3,300,200);
		default:
			break;
		}
	}
	//summer
	else if(myString == "springsummer" || myString == "springsummera" || 
		myString == "springsummerau" || myString == "springsummeraut" || 
		myString == "springsummerautu" || myString == "springsummerautum"){
		switch(imageState){
		case 0:
			image(summerImg1,300,200);
			break;
		case 1:
			image(summerImg2,300,200);
			break;
		case 2:
			image(summerImg1,300,200);
			break;
		case 3:
			image(summerImg3,300,200);
		default:
			break;
		}
	}
	//autumn
	else if(myString == "springsummerautumn" || myString == "springsummerautumnw" || 
		myString == "springsummerautumnwi" || myString == "springsummerautumnwin" || 
		myString == "springsummerautumnwint" || myString == "springsummerautumnwinte"){
		switch(imageState){
		case 0:
			image(fallImg1,300,200);
			break;
		case 1:
			image(fallImg2,300,200);
			break;
		case 2:
			image(fallImg1,300,200);
			break;
		case 3:
			image(fallImg3,300,200);
		default:
			break;
		}
	}
	//winter
	else if(myString == "springsummerautumnwinter"){
		switch(imageState){
		case 0:
			image(winterImg1,300,200);
			break;
		case 1:
			image(winterImg2,300,200);
			break;
		case 2:
			image(winterImg1,300,200);
			break;
		case 3:
			image(winterImg3,300,200);
		default:
			break;
		}
	}
	//starting winter
	else{
		switch(imageState){
		case 0:
			image(winterImg1,300,200);
			break;
		case 1:
			image(winterImg2,300,200);
			break;
		case 2:
			image(winterImg1,300,200);
			break;
		case 3:
			image(winterImg3,300,200);
		default:
			break;
	}
}
}


function drawWeather() {
//Code inspiration for snow/rain/leaves taken from https://jsfiddle.net/nicksuch/osc9yrL2/

//spring
 if(myString == "spring" || myString == "springs" || 
		myString == "springsu" || myString == "springsum" || 
		myString == "springsumm" || myString == "springsumme"){

		for(var p = 0; p < xPosition.length; p++){

			push();
			fill(255,205,221);
			ellipse(xPosition[p], yPosition[p], flakeSize[p]*3, flakeSize[p]);
			rotate(PI/5);
			pop();

   if(direction[p] == 0) {
      xPosition[p] += map(flakeSize[p], minFlakeSize, maxFlakeSize, .1, .5);
    } else {
      xPosition[p] -= map(flakeSize[p], minFlakeSize, maxFlakeSize, .1, .5);
    }
    
    yPosition[p] += flakeSize[p] + direction[p]; 
    
    if(xPosition[p] > width + flakeSize[p] || xPosition[p] < -flakeSize[p] || yPosition[p] > height + flakeSize[p]) {
      xPosition[p] = random(0, width);
      yPosition[p] = -flakeSize[p];
    }
			}

}

//summer
else if(myString == "springsummer" || myString == "springsummera" || 
		myString == "springsummerau" || myString == "springsummeraut" || 
		myString == "springsummerautu" || myString == "springsummerautum"){
for(var r = 0; r < xPosition.length; r++) {

				push();
				fill(105,225,255);
    			ellipse(xPosition[r], yPosition[r], flakeSize[r]/4, flakeSize[r]*20);
    			pop();

    yPosition[r] += flakeSize[r]; 
    
    if(xPosition[r] > width + flakeSize[r] || xPosition[r] < -flakeSize[r] || yPosition[r] > height + flakeSize[r]) {
      xPosition[r] = random(0, width);
      yPosition[r] = -flakeSize[r];
    } 
  }
}
	//autumn
	else if(myString == "springsummerautumn" || myString == "springsummerautumnw" || 
		myString == "springsummerautumnwi" || myString == "springsummerautumnwin" || 
		myString == "springsummerautumnwint" || myString == "springsummerautumnwinte"){
for(var a = 0; a < xPosition.length; a++){

			push();
			fill(63,121,56);
			ellipse(xPosition[a], yPosition[a], flakeSize[a]*3, flakeSize[a]);
			pop();

			push();
			fill(255,212,61);
			frameRate(26.5);
			translate(50,-100);
			scale(2);
			ellipse(xPosition[a], yPosition[a], flakeSize[a]*3/2, flakeSize[a]/3);
			pop();

			push();
			fill(140,38,14);
			frameRate(26.5);
			translate(-150,100);
			scale(2);
			ellipse(xPosition[a], yPosition[a], flakeSize[a]*3/2, flakeSize[a]/3);
			pop();

   if(direction[a] == 0) {
      xPosition[a] += map(flakeSize[a], minFlakeSize, maxFlakeSize, .1, .5);
    } else {
      xPosition[a] -= map(flakeSize[a], minFlakeSize, maxFlakeSize, .1, .5);
    }
    
    yPosition[a] += flakeSize[a] + direction[a]; 
    
    if(xPosition[a] > width + flakeSize[a] || xPosition[a] < -flakeSize[a] || yPosition[a] > height + flakeSize[a]) {
      xPosition[a] = random(0, width);
      yPosition[a] = -flakeSize[a];
    }
			}


} 


else{
	//snow
	for(var k = 0; k < xPosition.length; k++) {

    fill(255);
    ellipse(xPosition[k], yPosition[k], flakeSize[k], flakeSize[k]);
    
    if(direction[k] == 0) {
      xPosition[k] += map(flakeSize[k], minFlakeSize, maxFlakeSize, .1, .5);
    } else {
      xPosition[k] -= map(flakeSize[k], minFlakeSize, maxFlakeSize, .1, .5);
    }
    
    yPosition[k] += flakeSize[k] + direction[k]; 
    
    if(xPosition[k] > width + flakeSize[k] || xPosition[k] < -flakeSize[k] || yPosition[k] > height + flakeSize[k]) {
      xPosition[k] = random(0, width);
      yPosition[k] = -flakeSize[k];
    } 
  }
}
}


		
