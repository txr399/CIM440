let speech;

function setup() {
  createCanvas(400,400);
  background(0);
  speech = new p5.Speech(voiceReady);
  speech.started(startSpeaking);
  speech.ended(endSpeaking);

  funstion startSpeaking() {
    background(0, 255, 0);
  }

  function endSpeaking() {
    background(0);
  }
}

function mousePressed() {
  speech.speak('Coding Project');
}

function draw() {
  // put drawing code here
}
