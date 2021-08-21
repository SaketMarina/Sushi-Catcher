var bg, bgImg;
var bowl, bowlImg;
var sushi1, sushi2, sushi3, enemySushi;
var sushi1Img, sushi2Img, sushi3Img, enemySushiImg;
var PLAY = 1, END = 0, gameState = PLAY; 
var score = 0;

function preload() {
    bgImg = loadImage("SushiCatcherBackground.jpeg");
    bowlImg = loadImage("MyGameBowl1.png");
    sushi1Img = loadImage("sushi11.png");
    sushi2Img = loadImage("sushi2.png");
    sushi3Img = loadImage("sushi3.png");
    enemySushiImg = loadImage("enemySushiNoBackground.png");
}

function setup() {
  createCanvas(600,750);

  bg = createSprite(300, 400);
  bg.addImage(bgImg);
  bg.scale = 0.42;

  bowl = createSprite(300, 710);
  bowl.addImage(bowlImg);
  bowl.scale = 0.3;

    sushi1 = createSprite(Math.round(random(50, 550)), Math.round(random(-50, -1000)));
    sushi1.velocityY = 3;
    sushi1.scale = 0.5; 
    sushi1.addImage(sushi1Img);
    //sushi1.debug = true;
    sushi1.setCollider("circle", 0, 0, 150);

  sushi2 = createSprite(Math.round(random(50, 550)), Math.round(random(-50, -750)));
  sushi2.velocityY = 3;
  sushi2.scale = 0.5; 
  sushi2.addImage(sushi2Img);
  //sushi2.debug = true;
  sushi2.setCollider("circle", 0, 0, 150);

  sushi3 = createSprite(Math.round(random(50, 550)), Math.round(random(-50, -800)));
  sushi3.velocityY = 3;
  sushi3.scale = 0.5; 
  sushi3.addImage(sushi3Img);
  //sushi3.debug = true;
  sushi3.setCollider("circle", 0, 0, 150);

  enemySushi = createSprite(Math.round(random(50, 550)), Math.round(random(-50, -900)));
  enemySushi.velocityY = 3;
  enemySushi.scale = 0.25; 
  enemySushi.addImage(enemySushiImg);
  //sushi3.debug = true;
  enemySushi.setCollider("circle", 0, 0, 150);

}

function draw() {
  background(0);
  drawSprites();
  if (gameState === PLAY) {
  
    if (keyDown('right')) {
    bowl.x = bowl.x + 4;
  } 

  if (keyDown('left')) {
    bowl.x = bowl.x - 4;
  }

  if (sushi1.y > 770) {
    sushi1.x = Math.round(random(50, 550));
    sushi1.y = Math.round(random(-50, -700));
  }

  if (sushi2.y > 770) {
    sushi2.x = Math.round(random(50, 550));
    sushi2.y = Math.round(random(-50, -700));
  }

  if (sushi3.y > 770) {
    sushi3.x = Math.round(random(50, 550));
    sushi3.y = Math.round(random(-50, -700));
  }

  if (enemySushi.y > 770) {
    enemySushi.x = Math.round(random(50, 550));
    enemySushi.y = Math.round(random(-50, -700));
  }

  if (sushi1.isTouching(bowl)) {
    sushi1.x = Math.round(random(50, 550));
    sushi1.y = Math.round(random(-50, -700));
    score = score + 1;
  }

  if (sushi2.isTouching(bowl)) {
    sushi2.x = Math.round(random(50, 550));
    sushi2.y = Math.round(random(-50, -700));
    score = score + 1;
  }

  if (sushi3.isTouching(bowl)) {
    sushi3.x = Math.round(random(50, 550));
    sushi3.y = Math.round(random(-50, -700));
    score = score + 1;
  }

  if (enemySushi.isTouching(bowl)) {
    gameState = END;
  }

} else if(gameState === END) {
    sushi1.velocityY = 0;
    sushi2.velocityY = 0;
    sushi3.velocityY = 0;
    enemySushi.velocityY = 0;

    textSize(50);
    fill("red");
    text("Game Over", 180, 350);
  } 

  textSize(20);
  fill("black");
  text("score = " + score, 500, 50);          
  console.log(score);  
}