var bubbles = [];

function setup() {
  createCanvas(600, 400);

}

function mousePressed() {
  var b = new Bubble(random(0,600), 400);
   bubbles.push(b);
}

function draw() {
  background(91,220,182);

  for(var i = bubbles.length-1; i >= 0; i--){
    bubbles[i].update();
    bubbles[i].display();
    if(bubbles[i].isFinished() || bubbles[i].isTouching()){
      bubbles.splice(i, 1);
    }
  }
}

function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.lifespan = 255;
  this.col = color(255, 100, 76, 100);
  this.diameter = random(50,100);
  
  this.display = function() {
    stroke(255);
    fill(255, this.lifespan);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
  
  
  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    this.lifespan--;
  };
  
   
  this.isFinished = function() {
    if(this.lifespan < 0 ){
      return true;
    } else {
      return false;
    }
  };
  
   this.isTouching = function() {
    if(this.x > width || this.x < 0){
      return true;
    } else if(this.y > height || this.y < 0){
      return true;
    } else {
      return false;
    }
  };
  
};