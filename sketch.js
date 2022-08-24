var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload() {
  towerImg = loadImage("tower.png");

  doorImg = loadImage("door.png");

  climberImg = loadImage("climber.png");

  ghostImg = loadImage("ghost-standing.png");

  spookySound = loadSound("spooky.wav");
}


function setup() {
  createCanvas(600, 600);

  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,200);
  ghost.addImage(ghostImg);
  ghost.scale = 0.5;

  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
}


function draw() {
  background(200);
  

  if (gameState === "play") {

  if(tower.y > 600) {
    tower.y = 300
  }


  if(keyDown("space")) {
    ghost.velocityY = -10;
  }

  ghost.velocityY = ghost.velocityY + 0.8


  if(keyDown("right")) {
    ghost.x = ghost.x + 3
  }


  if(keyDown("left")) {
    ghost.x = ghost.x - 3
  }

  gerarPortas();

  }

  drawSprites();
}


function gerarPortas() {
  if(frameCount % 250 === 0) {
    door = createSprite(300, -50, 30, 50);
    door.velocityY = 1;
    door.x = random(120,480);
    door.addImage(doorImg);

    climber = createSprite(300, 10, 50, 20);
    climber.velocityY = 1;
    climber.x = door.x;
    climber.addImage(climberImg);

    invisibleBlock = createSprite(300, 20, 50, 10);
    invisibleBlock.velocityY = 1;
    invisibleBlock.x = climber.x;
    invisibleBlock.width = climber.width;
    invisibleBlock.visible = false;

    door.lifetime = 700;
    climber.lifetime = 700;
    invisibleBlock.lifetime = 700;

    doorsGroup.add(door);
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }



}