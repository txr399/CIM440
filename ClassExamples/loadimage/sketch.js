var puppyImage;



function preload(){
  //use to load  media
puppyImage = loadImage("puppy.jpg");

}



function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  image(puppyImage,0,0);
  //imag var, x pos, y pos, width, height
  //dividing the width and height by a number scales proportionally
  image(puppyImage,0,0,puppyImage.width/4,puppyImage.height/4);
  //don't choose a random size
}
