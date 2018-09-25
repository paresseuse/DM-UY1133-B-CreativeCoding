color red = color(255,0,0,255);
color blue = color(0,0,255,255);
color currentStroke;

int bottom1;
int left;
int right;
int top1;

int xspeed = 3;
int yspeed = 2;

float xpos;
float ypos;

float loopStep;
float animStep;

void setup(){
  size(600,600);
  fill(255,162,173);
  background(255,130,45);
  noStroke();
  
  right = width;
  bottom1 = height;
  
  
  //draw()will not loop
  noLoop(); 
  
  println("click to start");
  
  //initial position of ball
  xpos = random(width);
  ypos = random(height);
  
}

void draw(){
  
     // sin returns a value in the range of -1 .. 1, so
  // absolute is used to convert it to a range of 0 .. 1
  animStep = abs(sin(frameCount * 0.016666667));


 for (int i = top1; i <= bottom1; i += 1) {
    loopStep = map(i, top1, bottom1, 0.0, 1.0);
    currentStroke = lerpColor(red, blue, (loopStep + animStep) * 0.45, RGB);
    stroke(currentStroke);
    //line(left, i, right, i);
  }
  
  xpos = xpos + xspeed;
    //random green & blue integers in red values
    float gb = random(0,100);
  
    if (xpos > 600 || xpos < 0){
    fill(random(200,255), gb, gb);
      xspeed *= -1;
    }
    
    ypos = ypos + yspeed;
    //random red & green integers in blue values
    float rg = random(0,150);


    if (ypos > 600 || ypos < 0){
      yspeed *= -1;
      fill(rg,rg,random(200,255));
    }

  ellipse(xpos, ypos, 75,75);
  
}

//start game
void mouseClicked() {
  loop();  
  println("press any key to stop; press 'c' to clear");
}

//stop game/clear game
void keyPressed() {
  if (key == 'c'){
    fill(255);
    rect(0,0,width,height);
     noLoop();
  }
    else{
  noLoop();
    }

  }
  
