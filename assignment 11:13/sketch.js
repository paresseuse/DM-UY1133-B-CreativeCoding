var myData;
var myFont;
var myfontBold;
var url;

var selection = [];
var mySelection;
var index = 0;

var totoroTitle;
var totoroDesc;
var totoroDate;
var totoroImg;

var kikiTitle;
var kikiDesc;
var kikiDate;
var kikiImg;

var mononokeTitle;
var mononokeDesc;
var mononokeDate;
var mononokeImg;

var saTitle;
var saDesc;
var saDate;
var saImg;

var howlTitle;
var howlDesc;
var howlDate;
var howlImg;

function preload(){
myFont = loadFont("assets/GlacialIndifference-Regular.otf");
myfontBold = loadFont("assets/GlacialIndifference-Bold.otf");
totoroImg = loadImage("assets/totoro.png");
kikiImg = loadImage("assets/kiki.png");
mononokeImg = loadImage("assets/mononoke.png");
saImg = loadImage("assets/sa.png");
howlImg = loadImage("assets/howl.png");

}

function setup() {

	createCanvas(800,600);

	textFont(myFont);
	textSize(15);
	textAlign(CENTER,CENTER);

	url = "https://ghibliapi.herokuapp.com/films";
	queryNewData();

	selection[0] = 2;
	selection[1] = 3;
	selection[2] = 8;
	selection[3] = 10;
	selection[4] = 12;
    
}

function draw() {

	background(164,208,225);
	imageMode(CENTER);

	filmDisplay(selection[index]);

	push();
	fill(255);
	text("Click the screen to change movies",width/2,575);
	pop();

}

function callBack(myData){

	console.log(myData);

	totoroTitle = myData[2].title;
	console.log(totoroTitle);
	totoroDesc = myData[2].description;
	console.log(totoroDesc);
	totoroDate = myData[2].release_date;
	console.log(totoroDate);

	kikiTitle = myData[3].title;
	console.log(kikiTitle);
	kikiDesc = myData[3].description;
	console.log(kikiDesc);
	kikiDate = myData[3].release_date;
	console.log(kikiDate);

	mononokeTitle = myData[8].title;
	console.log(mononokeTitle);
	mononokeDesc = myData[8].description;
	console.log(mononokeDesc);
	mononokeDate = myData[8].release_date;
	console.log(mononokeDate);

	saTitle = myData[10].title;
	console.log(saTitle);
	saDesc = myData[10].description;
	console.log(saDesc);
	saDate = myData[10].release_date;
	console.log(saDate);

	howlTitle = myData[12].title;
	console.log(howlTitle);
	howlDesc = myData[12].description;
	console.log(howlDesc);
	howlDate = myData[12].release_date;
	console.log(howlDate);
	

}

function filmDisplay(mySelection){
var angle = 0;

	switch(index){
		case 0:
			push();
			scale(1.25);
			image(totoroImg,200,height/3);
			pop();
			push();
			textFont(myfontBold);
			textSize(30);
			fill(255);
			text(totoroTitle,600,height/4);
			pop();
			push();
			textSize(12);
			fill(255);
			text(totoroDesc,450,200,300,150);
			pop();
			push();
			textFont(myfontBold);
			textSize(24);
			fill(255);
			text(totoroDate,600,height/3.25);
			pop();
			break;
		case 1:
			push();
			scale(1.25);
			image(kikiImg,200,height/3);
			pop();
			push();
			textFont(myfontBold);
			textSize(25);
			fill(255);
			text(kikiTitle,600,height/4);
			pop();
			push();
			textSize(12);
			fill(255);
			text(kikiDesc,450,200,300,150);
			pop();
			push();
			textFont(myfontBold);
			textSize(24);
			fill(255);
			text(kikiDate,600,height/3.25);
			pop();
			break;
		case 2:
			push();
			scale(1.25);
			image(mononokeImg,200,height/3);
			pop();
			push();
			textFont(myfontBold);
			textSize(25);
			fill(255);
			text(mononokeTitle,600,height/4);
			pop();
			push();
			textSize(12);
			fill(255);
			text(mononokeDesc,450,200,300,150);
			pop();
			push();
			textFont(myfontBold);
			textSize(24);
			fill(255);
			text(mononokeDate,600,height/3.25);
			pop();
			break;
		case 3:
			push();
			scale(1.25);
			image(saImg,200,height/3);
			pop();
			push();
			textFont(myfontBold);
			textSize(25);
			fill(255);
			text(saTitle,600,height/4);
			pop();
			push();
			textSize(12);
			fill(255);
			text(saDesc,450,200,300,150);
			pop();
			push();
			textFont(myfontBold);
			textSize(24);
			fill(255);
			text(saDate,600,height/3.25);
			pop();
			break;
		case 4:
			push();
			scale(1.25);
			image(howlImg,200,height/3);
			pop();
			push();
			textFont(myfontBold);
			textSize(25);
			fill(255);
			text(howlTitle,600,height/4);
			pop();
			push();
			textSize(12);
			fill(255);
			text(howlDesc,450,200,300,150);
			pop();
			push();
			textFont(myfontBold);
			textSize(24);
			fill(255);
			text(howlDate,600,height/3.25);
			pop();
			break;
	}
}

function mouseClicked(){
	index++;
}

function queryNewData(){
	myData = loadJSON(url, callBack);

}