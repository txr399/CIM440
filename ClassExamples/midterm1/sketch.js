var pictureSelect;
var pictureType = "";

var picY = 0;
picX = 0;

hitX1 = 300;
hitY1 = 100;

hitX2 = 500;
hitY2 = 200;

hitX3 = 150;
hitY3 = 150;

hitX4 = 200;
hitY4 = 200;

var threshold = 50;

function preload(){
  gameImage = loadImage("https://cdn.shopify.com/s/files/1/1723/9103/products/Screen_Shot_2017-08-05_at_3.53.44_PM_20865813-4392-48f5-8cdd-6dfa78272792_1024x1024.png?v=1501966522"); //load image link
}

function setup() {
  // put setup code here
  createCanvas(800,800);
  pictureSelect = createSelect();
  pictureSelect.position(10,10);
  pictureSelect.option("");
  pictureSelect.option("game");
  pictureSelect.changed(function(){

    pictureType = pictureSelect.value();

  });

}

function draw() {
  // put drawing code here

  background(100);

  if(pictureType == "game"){

    ellipse(hitX1,hitY1,threshold*2,threshold*2);
    ellipse(hitX2,hitY2,threshold*2,threshold*2);
    ellipse(hitX3,hitY3,threshold*2,threshold*2);
    ellipse(hitX4,hitY4,threshold*2,threshold*2);

    image(gameImage,picX,picY,50,50);

      }

      if(keyIsPressed == true && key == "w"){
        picY--;
      }

      if(keyIsPressed == true && key == "s"){
        picY++;
      }

      if(keyIsPressed == true && key == "a"){
        picX--;
      }

      if(keyIsPressed == true && key == "d"){
        picX++;
      }


}//end of draw
