var seasonSelect;
var seasonType = "";

var sunX = 0;
var sunY = 0;


var snowX = [];
var snowY = [];

var snowAmount = 100;

var leafX = [];
var leafY = [];
var leafAmount = 100;
var leafImage;

function preload(){
  leafImage = loadImage("https://openclipart.org/image/300px/svg_to_png/257622/1470680735.png");
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  seasonSelect = createSelect();
  seasonSelect.position(10,10);
  seasonSelect.option("");
  seasonSelect.option("fall");
  seasonSelect.option("winter");
  seasonSelect.option("spring");
  seasonSelect.option("summer");
  seasonSelect.changed(function(){

    seasonType = seasonSelect.value();

  });

  sunX = width/2;
  sunY = height * 2;

  // var i = 0; start variable
  //i < 100; is going to set the limit
  // i ++ is the iterator i++ is the same as i = i+1
  for(var i = 0; i < snowAmount; i++ ){
    snowX[i] = random(0,width); //choose a number from 0 to width-1 or 399
    snowY[i] = random(0, -500);
  }

  console.log("snowX" + snowX);
  console.log("snowY" + snowY);

}

function draw() {
  // put drawing code here

  background(255);

  if(seasonType == "fall"){
    console.log("fall");
  }else if(seasonType == "winter"){
    console.log("winter");

    for(var x = 0; x<snowAmount; x++){
      snowY[x]++; // snowY[i] = snowY[i] +1;
      snowY[x] = snowY[x] + 5;
      ellipse(snowX[x], snowY[x],10,10);
      // checks for snow hitting bottom of canvas
      if(snowY[x] > height){
        //snowY[x] = 0;
        snowY[x] = random(0,-500);
        snowX[x] = random(0, width);
      }
    }



  }else if(seasonType == "spring"){
    console.log("spring");
  }else if(seasonType == "summer"){
    console.log("summer");
    fill("orange");
    stroke("red");
    ellipse(sunX,sunY,width,height);


    if(sunY > height){
      sunY = sunY-1;
    }
  //end of summer
  }else{
    console.log("blank");
    text("Make a selection", 100,20);
  }





}//end of draw
