var seasonsSelect;
var seasonType = "";


var sunX = 0;
var sunY = 0;

function setup() {
  // put setup code here
  createCanvas(400,400);
  seasonsSelect = createSelect();
  seasonsSelect.position(10,10);
  seasonsSelect.option("");
  seasonsSelect.option("fall");
  seasonsSelect.option("winter");
  seasonsSelect.option("spring");
  seasonsSelect.option("summer");
  seasonsSelect.changed(function(){

    seasonType = seasonsSelect.value();

  });

}

function draw() {
  // put drawing code here
  background(255);

  if(seasonType == "fall"){
    console.log("fall");
  }else if(seasonType == "winter"){
    console.log("winter");
  }else if(seasonType == "spring"){
    console.log("spring");
  }else if(seasonType == "summer"){
    console.log("summer");
    fill("orange");
    stroke("red");
    ellipse(width/2, height, width, height);
  }else{
    console.log("blank");
    text("Make a selection", 100,20);
  }









}//end of draw loop
