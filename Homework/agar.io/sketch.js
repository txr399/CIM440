var blob;
var blobs = [];
var zoom = 1;
var buttonSelect;
var buttonType = "";

var currentTime = 0;
var timeLeft = 60;
var startTime = 0;

var buzzer;
function preload() {
  buzzer = loadSound("buzzer.mp3");
}

function setup() {
  createCanvas(600, 600);

  startTime = millis();

  blob = new Blob(0, 0, 64);
  for (var i = 0; i < 200; i++) {
    var x = random(-width,width);
    var y = random(-height,height);
    blobs[i] = new Blob(x, y, 16);

    buttonSelect = createSelect();
    buttonSelect.position(450,5);
    buttonSelect.option("");
    buttonSelect.option("instructions")
    buttonSelect.option("Start");

    buttonSelect.changed(function(){

      buttonType = buttonSelect.value();

    });
  }
}

function draw() {
  background(0);

  if(buttonType == "instructions"){
    let title = "Music Eater"
    let info = 'Welcome to Music Eater. The game is simple. Use the mouse to drag around the big bubble. As you eat the smaller bubbles, you will grow in size. Turn up your volume to hear each random note play. You have 30 seconds! Check it out!';
    textSize(20);
    fill(50,205,50);
    text(title, 200,50,100,100)
    text(info, 100, 100, 300, 300);
  }

  if(buttonType == "Start"){


  translate(width/2, height/2);
  var newzoom = 64 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);

  for (var i = blobs.length-1; i >=0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1);
    }
  }


  blob.show();
  blob.update();

}

  else if(buttonType == "Start"){
    function secondsToMinutes(s) {
    var min = floor(s / 60);
    var sec = s % 60;
    return nf(min, 2) + ':' + nf(sec, 2);

    }

      var timer = select('#timer');
      timer.html(secondsToMinutes(timeLeft - currentTime));

      var interval = setInterval(timeIt, 1000);

      function timeIt() {

        currentTime = floor((millis() - startTime) / 1000);
        timer.html(secondsToMinutes(timeLeft - currentTime));
        if (currentTime == timeLeft) {
          buzzer.play();
          clearInterval(interval);
        }

      }

    }


//if(timer == 0) {
  //alert("YOU RAN OUT OF TIME, RESTART!");
  //document.location.reload();
  //clearInterval(interval); // Needed for Chrome to end game
}
