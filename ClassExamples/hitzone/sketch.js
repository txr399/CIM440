var currentImage = 0;

var imageArray = [];

var hitX = [100,200];
var hitY = [300,300];

var hitSize = 50;

function preload(){
  // load media
  imageArray[0] = loadImage("images/puppy.jpg");
  imageArray[1] = loadImage("images/dinosaur.jpg");
  imageArray[2] = loadImage("images/sloth.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);

}

function draw() {
  // put drawing code here
  background(255);
  console.log("currentImage " + currentImage);
  image(imageArray[currentImage],0,0,imageArray[currentImage].width/4,imageArray[currentImage].height/4);

  rect(hitX[0],hitY[0],hitSize,hitSize);
  rect(hitX[1],hitY[1],hitSize,hitSize);

}//end of draw

function mousePressed(){
  if(mouseX > hitX[0] && mouseX < hitX[0] + hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
    console.log("Button 0");
    currentImage = currentImage + 1;

    if(currentImage == 3){
      currentImage = 0;
    }//end of currentImage == 3 if statement

  }//button 0 end of hitzone

}//end of mousePressed
