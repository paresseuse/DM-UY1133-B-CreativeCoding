
var img1, img2;
var canvas = document.getElementById("canvas");
var ctx; //= canvas.getContext('2d');
var isDown = false;
var radius = 20;
var pi2 = Math.PI*2;

function setup() {

	img1 = createImg("https://pbs.twimg.com/profile_images/609298192916742144/K4SyUTe8_400x400.jpg");
	img2 = createImg("https://pbs.twimg.com/profile_images/610150821397987331/qZzryLFn_400x400.jpg");
	img1.position(100,100);
  img2.position(100,100);
  //canvas = createCanvas(600,600);
  //canvas.position(100,100);
  ctx = canvas.getContext('2d');

  canvas.globalCompositeOperation = "destination-out";

  canvas.onmousedown = handleMouseDown;
  canvas.onmousemove = handleMouseMove;
  window.onmouseup = handleMouseUp;

}

function draw(){

}

function handleMouseDown(e) {
    isDown = true;
    var pos = get(mouseX,mouseY);
    erase(pos.x, pos.y);
}
function handleMouseUp(e) {
    isDown = false;
}
function handleMouseMove(e) {
    if (!isDown) return;
    var pos = get(mouseX,mouseY);
    erase(pos.x, pos.y);   
}

function getXY(e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    }
  }

function erase(x, y){
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, radius, 0, pi2);
    ctx.fill();
}





