var myData;

function preload(){
	myData = loadJSON("assets/game-of-thrones-houses.json");
}

function setup() {
  createCanvas(800,600);

}

function draw() {
	for (var i = 0; i < myData.GoTHouses.length; i++){
		var housesName = myData.GoTHouses[i].name;
		var housesNumber = myData.GoTHouses[i].number; 
		var offset = 75;
		var scaleData = 10;

		rect(i*offset,200,50,housesNumber*scaleData);
		text(housesName,i*offset,100,100,100);
	}

}