var backgroundColor = "yellow"; //Strings
var mouthX = 125;
var earOffset = 20;
function setup() {
  // put setup code here
  createCanvas(500,500);
  background("black");
  background(255);
  background(0);
  background(255,255,255);
  background(0,0,0);
  background(255,0,0);

  //console.log(backgroundColor);
  console.log("backgroundColor: " + backgroundColor);
  //console.log(mouthX);
  console.log("mouthX: " + mouthX);
}

function draw() {
  // put drawing code here

  console.log("backgroundColor: " + backgroundColor);
  console.log("mouthX: " + mouthX);

  background(255);

  background(backgroundColor);


  strokeWeight(1);
  fill(255,255,255);
  stroke(0,255,0);
  
  fill(255,0,0);
  // head
  ellipse(200,200,100,100);

  fill("brown");

  //neck
  rect(175,250,50,50);

  // body
  rect(200,275,150,100,10);





}






//end of code
