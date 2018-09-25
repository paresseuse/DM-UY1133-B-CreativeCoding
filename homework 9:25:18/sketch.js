function setup() {
  createCanvas(600,500);
  background(255);

}

function draw() {
  }

 function mouseMoved(){
 	background(255);
 
  if (mouseX < (width/2) && mouseY < (height/3)){	
  	noStroke();
  	fill(255,162,173);
  	rect(0,0,width/2,height/3);
  }

  else if(mouseX < (width/2) && mouseY > (height/3)){
  	noStroke();
  	fill(47,182,185);
  	rect(0,height/3,width/2,height*(2/3));

  }

  else{
  	noStroke();
  	fill(252,211,97);
  	rect(300,0,width/2,height);
  }

  if(mouseX == 500){
  	noStroke();
  	fill(235,185,255);
  	rect(500,0,100,height);
  }

}