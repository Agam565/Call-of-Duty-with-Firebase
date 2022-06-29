var database, gameState;
var backgroundImage
function preload() {
  backgroundImage = loadImage("./assets/background.jpeg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
}

function draw() {
 background(backgroundImage);
}
