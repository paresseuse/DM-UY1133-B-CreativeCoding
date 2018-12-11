//https://editor.p5js.org/cdaein/sketches/HJdF8TL6-
//https://codepen.io/harrymilnes/pen/PKQBGZ

var bubbles = [];
var bgImg;

function setup(){ 
  createCanvas(1920,1080);
  bgImg = createImg("https://i.imgur.com/M2tNTuL.png"); 
  frameRate = 20;
} 

function draw(){ 
background(255);
image(bgImg,0,0);


 for (var t = 0; t < random(10,15); t++) {
    bubbles.push(new tealBubble(random(0,1920),random(1090,2500),random(100,350)));
    bubbles[t].move();
    bubbles[t].display();

  }

  for (var i = 0; i < random(10,15); i++) {
    bubbles.push(new pinkBubble(random(0,1920),random(1090,2500),random(100,350)));
    bubbles[i].move();
    bubbles[i].display();

  }

   for (var p = 0; p < random(10,15); p++) {
    bubbles.push(new purpleBubble(random(0,1920),random(1090,2500),random(100,350)));
    bubbles[p].move();
    bubbles[p].display();

  }

}

function pinkBubble(x,y,s){
  this.x = x;
  this.y = y;
  this.s = s;
  this.xspeed = random(-2, 3);
  this.yspeed = random(1,6);
  
  this.move = function(){
    this.x += (this.xspeed);
    this.y -= (this.yspeed);

    if(this.y < 0){
      var index = bubbles.indexOf(this);
      bubbles.splice(index,1);
    }
  };
  
  this.display = function(){
    
    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(this.x, this.y, this.s);
    pop();

      for(var m = 0; m <51; m++){

      push();
      stroke(255,189,213,255-(m*10));
      fill(0,0,0,0); 
      ellipse(this.x, this.y, this.s-(5*m)); 
      pop();


  } 

    };
  
}

function tealBubble(x,y,s){
  this.x = x;
  this.y = y;
  this.s = s;
  this.xspeed = random(-2, 3);
  this.yspeed = random(1,6);
  
  this.move = function(){
    this.x += (this.xspeed);
    this.y -= (this.yspeed);

    if(this.y < 0){
      var index = bubbles.indexOf(this);
      bubbles.splice(index,1);
    }
  };
  
  this.display = function(){
    
    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(this.x, this.y, this.s);
    pop();

      for(var n = 0; n <51; n++){

      push();
      stroke(126,227,225,255-(n*10));
      fill(0,0,0,0); 
      ellipse(this.x, this.y, this.s-(5*n)); 
      pop();


  } 

    };
  
}

function purpleBubble(x,y,s){
  this.x = x;
  this.y = y;
  this.s = s;
  this.xspeed = random(-2, 3);
  this.yspeed = random(1,6);
  
  this.move = function(){
    this.x += (this.xspeed);
    this.y -= (this.yspeed);

    if(this.y < 0){
      var index = bubbles.indexOf(this);
      bubbles.splice(index,1);
    }
  };
  
  this.display = function(){

    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(this.x, this.y, this.s);
    pop();

      for(var r = 0; r <51; r++){

      push();
      stroke(212,179,243,255-(r*10));
      fill(0,0,0,0); 
      ellipse(this.x, this.y, this.s-(5*r)); 
      pop();


  } 

    };
  
}



