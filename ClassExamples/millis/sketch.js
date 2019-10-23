var interval = 1000;
var prevMillis = 0;
var counter = 0;


function setup() {

  }


  function draw() {
    //console.log(millis());
    if(millis() - prevMillis > interval){
      prevMillis = millis();
      counter = counter +1;
      console.log(counter);
    }
  }
