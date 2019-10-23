var hitzone3 = false;


function setup() {


    createCanvas(400,400);

    hello();
    goodbye("tati");
    goodbye("zeven");
}

function draw() {

  background(255);

  if(circleHitzone(100,100) == true){
    circleColor(random(width),random(height),random(255),random(255),random(255),random(0,200));
  }

  for(var i = 0; i <500, i++){
    circleColor(random(width),random(height),random(255),random(255),random(255),random(0,200));
  }
}

  fill('black');
  ellipse(mouseX,mouseY,10,10);

  console.log(circleHitzone(100,100));

  if(circleHitzone(300,300) == true){
    rect(100,100,100,100);
  }

  circleHitzone(200,200);

  if(hitzone3 == true){
    ellipse(30,30,30,30);
  }



function mousePressed(){
  if(circleHitzone(200,200) == true){
    console.log("mousePressed");
    hitzone3 = true;
  }else{
    hitzone3 = false;
  }
  }
}




function hello(){
  console.log("hello");
}


function goodbye(message){
  console.log("goodbye" + message);
}


function circleColor(xpos,ypos,r,g,b,cSize){
  fill(r,g,b);
  ellipse(xpos,ypos,cSize,cSize);


}


function circleHitzone(distX,DistY){
  var curDist = dis(mouseX,MouseY,distX,DistY);
  console.log("CurDist" + curDist);
  fill(127);
  stroke(255);
  ellipse(distX,DistY,10,10);
  if(curDist < 10){
    return true;
    strokeWeight(5)
  }else{
    return false;
    strokeWeight(1);
  }
}
