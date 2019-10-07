var currentImage = 0;

var imageArray = [];

var hitX = [100,200];
var hitY = [300,300];

var hitSize = 50;

function preload(){
  imageArray[0] = loadImage("images/golf.jpg");
  imageArray[1] = loadImage("images/baseball.jpg");
  imageArray[2] = loadImage("images/basketball.jpg");
  imageArray[3] = loadImage("images/boxing.jpg");
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);

  image(imageArray[currentImage],0,0,imageArray[currentImage].width,imageArray[currentImage].height);

  rect(hitX[0],hitY[0],hitSize,hitSize);
  rect(hitX[1],hitY[1],hitSize,hitSize);
}

function mousePressed(){

  if(mouseX >hitX[0] && mouseX < hitX[0] + hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
    console.log("Clicked button 0");
    currentImage = currentImage + 1;
    if(currentImage == 4){
      currentImage = 0;
    }//check length
  }// end of hit[0] click

  if(mouseX >hitX[1] && mouseX < hitX[1] + hitSize && mouseY > hitY[1] && mouseY < hitY[1] + hitSize){
    console.log("Clicked button 1");
    currentImage = currentImage - 1;
    if(currentImage == -1){
      currentImage = 3;
    }//check length
  }// end of hit[0] click


}//end of mousePressed
