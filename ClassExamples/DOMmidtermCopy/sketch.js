var pictureSelect;
var pictureType = "";

var picY = 0;
var picX = 0;

hitX1 = 300;
hitY1 = 200;

hitX2 = 500;
hitY2 = 400;

hitX3 = 300;
hitY3 = 400;

hitX4 = 500;
hitY4 = 200;

var threshold = 50;

var hitzoneDistance = 0;


function preload(){
  gameImage = loadImage("https://cdn.shopify.com/s/files/1/1723/9103/products/Screen_Shot_2017-08-05_at_3.53.44_PM_20865813-4392-48f5-8cdd-6dfa78272792_1024x1024.png?v=1501966522"); //load image link
}

function setup() {
  // put setup code here
  createCanvas(800,800);
  pictureSelect = createSelect();
  pictureSelect.position(10,10);
  pictureSelect.option("");
  pictureSelect.option("instructions")
  pictureSelect.option("game");

  pictureSelect.changed(function(){

    pictureType = pictureSelect.value();

  });

}

function draw() {
  // put drawing code here

  background(100);

  if(pictureType == "instructions"){
    let title = "Batman's World"
    let info = 'Welcome to Batman. The game is simple. Use the keys "W", "S", "A", and "D" to move Batman around. As Batman enters one of the four circles, you can change the color of the circles. As you click a circle, you can do something different. Check it out!';
    textSize(20);
    fill(50);
    text(title, 200,50,100,100)
    text(info, 100, 100, 300, 300);
  }

  if(pictureType == "game"){

    ellipse(hitX1,hitY1,threshold*2,threshold*2);
    ellipse(hitX2,hitY2,threshold*2,threshold*2);
    ellipse(hitX3,hitY3,threshold*2,threshold*2);
    ellipse(hitX4,hitY4,threshold*2,threshold*2);

    image(gameImage,picX,picY,50,50);

      }

  hitDistance = dist(picX,picY,hitX1,hitY1);
  hitDistance1 = dist(picX,picY,hitX2,hitY2);
  hitDistance2 = dist(picX,picY,hitX3,hitY3);
  hitDistance3 = dist(picX,picY,hitX4,hitY4);
  hitDistance4 = dist(mouseX,mouseY,hitX1,hitY1);

    console.log("hitDistance " + hitDistance);
        //Hover state
    if(hitDistance <= threshold){
          //do something, if hitDistance less than or equal to 20, 0-20
          fill("red");
        }else if (hitDistance1 <= threshold){
            fill("blue");
        }else if (hitDistance2 <= threshold){
            fill("green");
        }else if (hitDistance3 <= threshold){
            fill("pink");
        }else if(hitDistance4 <= threshold){
          fill(random(255));
          text("flashing lights", hitX1,hitY1+30);
        }else{
        fill(255);
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
