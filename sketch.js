var backgroundImg, tankImg, enemyTankImg, runningSoldier, crawlingSoldier, playButton, Screen2;
var bk;
var form;



function preload(){
  backgroundImg = loadImage("HD-wallpaper-world-of-tanks-with-background-of-castle-world-of-tanks-games.jpg");
  //tankImg = loadImage("tank.png");
  //playButton = loadImage("play.png");
}

function setup() {
  createCanvas(1200,800);
  form = new Form();
  form.display();
}

function draw() {
  background(255,255,255);  
  drawSprites();
}