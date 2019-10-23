var golf;
var baseball;
var basketball;
var boxing;

var gButton;
var baseButton;
var baskButton;
var boxButton;

var currentImage = 0;


function preload(){
  golf = loadImage("images/golf.jpg");
  baseball = loadImage("images/baseball.jpg");
  basketball = loadImage("images/basketball.jpg");
  boxing = loadImage("images/boxing.jpg");
}

function setup() {
  createCanvas(500,500);

  gButton = createButton("Golf");
  gButton.mousePressed(function(){
    currentImage = 0;
  });

  baseButton = createButton("Baseball");
  baseButton.mousePressed(function(){
    currentImage = 1;
  });

  baskButton = createButton("Basketball");
  baskButton.mousePressed(function(){
    currentImage = 2;
  });

  boxButton = createButton("Boxing");
  boxButton.mousePressed(function(){
    currentImage = 3;
  });

}

function draw() {
  background(255);
  console.log("currentImage " + currentImage);

  if(currentImage == 0){
    image(golf,100,100,300, 300);
  }if(currentImage == 1){
    image(baseball,100,100,300, 300);
  }if(currentImage == 2){
    image(basketball,100,100,300,300);
  }if(currentImage == 3){
    image(boxing,100,100,300,300);
  }
}
