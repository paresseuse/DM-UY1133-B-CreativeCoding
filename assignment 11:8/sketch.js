var myData;
var url;

function setup() {

	createCanvas(600,600);

	url = "https://ghibliapi.herokuapp.com/films";
	queryNewData();
    
}

function draw() {

	background(100);

}

//callback function from loadJSON
function callBack(myData){

	//print the entire data object
	console.log(myData);

	//find a specific piece of data
	var movieTitle = myData[0].title;
	console.log(movieTitle);
	var movieDesc = myData[0].description;
	console.log(movieDesc);
	var movieDate = myData[0].release_date;
	console.log(movieDate);

}

function queryNewData(){
	//use loadJSON with a callback method for asynchronous data loading
	//callBack() will be called when a valid data object is received.
	myData = loadJSON(url, callBack);

}