var currentImage = 0;

var imageArray = [];
var hitX =





function setup() {
  // put setup code here

createCanvas(500,500)
}


function mousePressed(){
  if(mouseX)
}





  currentAnimal = puppy;
if(currentImage == 3){
  currentImage =0;
}
function draw() {
  // put drawing code here
  background(255);
  console.log("currentImage" + currentImage);
  image(imageArray[currentImage], 0, 0, imageArray[currentImage].width/4,imageArray[currentImage].height/4)
}
