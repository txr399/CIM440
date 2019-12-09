var counter = 0;
var timeLeft = 5;

function secondsToMinutes(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min,2) + ':' + nf(sec,2);

}

var buzzer;
function preload() {
  buzzer = loadSound("buzzer.mp3");
}

function setup() {
  createCanvas(1000, 1000);

  var timer = select('#timer');
  timer.html(secondsToMinutes(timeLeft - counter));

  var interval = setInterval(timeIt, 1000);

  function timeIt() {
    counter++;
    timer.html(secondsToMinutes(timeLeft - counter));
    if (counter == timeLeft) {
      buzzer.play();
      clearInterval(interval);
    }

  }

}
