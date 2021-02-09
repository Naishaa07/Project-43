var hr = hour();
var min = minute();
var sec = second();
//var scAngle, minAngle, hrAngle;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
 
  secAngle=map(sec, 0, 60, 0, 360)
  minAngle=map(min, 0, 60, 0, 360)
  hrAngle=map(hr, 0, 12, 0, 360)
  push();
  rotate(secAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(400,200,0,0)
  pop();
  push();
  rotate(minAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(400,200,0,0)
  pop();
  push();
  rotate(hrAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(400,200,0,0)
  pop();
 // drawSprites();
}