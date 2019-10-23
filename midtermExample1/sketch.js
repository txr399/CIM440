var imageArray = [];

var hitX = [100,200];
var hitY = [300,300];

var hitSize = 50;

var currentImage = 0;

function preload(){
  imageArray[0] = loadImage("images/sloth.jpg");
  imageArray[1] = loadImage("images/puppy.jpg");
  imageArray[2] = loadImage("images/dinosaur.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);

}

function draw() {

  background(255);
  image(imageArray[currentImage],0,0,imageArray[currentImage].width/4,imageArray[currentImage].height/4);

  rect(hitX[0],hitY[0],hitSize,hitSize);
  rect(hitX[1],hitY[1],hitSize,hitSize);

}//end of draw

function mousePressed(){

  if(mouseX >hitX[0] && mouseX < hitX[0] + hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
    console.log("Clicked button 0");
    currentImage = currentImage + 1;
    if(currentImage == 3){
      currentImage = 0;
    }//check length
  }// end of hit[0] click

}//end of mousePressed
