var rectWidth = 150;
var triEyeYone = 175;
var triEyeYtwo = 195;
var eyeColor = ('red');
var noseColor = (216, 34, 100);
var mouthColor = ('pink');
var faceColor = ('orange');
//each of these variables provides substitutions for position and color



function setup() {
createCanvas(500,500);
background(255,255,0);
//colors the background

}

function draw() {

rectMode(CENTER);
//puts the rectangle in he middle of the canvas

fill(faceColor);
rect (250, 250, rectWidth, 200);
//create the face

fill(noseColor);
triangle (248, 265, 238, 235, 258, 235);
//nose triangle

fill(mouthColor);
rect (250, 300, 105, 25);
//rectangle mouth

fill(eyeColor);
triangle (215, triEyeYone, 205, triEyeYtwo, 225, triEyeYtwo);
//first eye triangle

triangle (280, triEyeYone, 270, triEyeYtwo, 290, triEyeYtwo);
//second eye triangle


}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    noseColor = 'black';
  } else if (keyCode === DOWN_ARROW) {
    noseColor = 'blue';
  }
}
//if you press the up arrow, the nose will be black
//if you press the down arrow, the nose will be blue

function mousePressed() {
  if (mouthColor === 0) {
    mouthColor = 255;
  } else {
    mouthColor = 0;
  }
}
