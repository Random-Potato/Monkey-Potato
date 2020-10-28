
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  obstacleGroup = createGroup();
  bananasGroup = createGroup();
  
  ground = createSprite(200,350,800,20);
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
  monkey = createSprite(50,300,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
}



function setup() {
  
  
}


function draw() {
  background("white");
  createEdgeSprites();
  monkey.velocityY ++;
  
  if(frameCount%300 === 0){
    createObstacle();
  }
  
  if(frameCount%80 === 0){
    createBanana();
  }
  
  if(keyDown("space")&&monkey.y>309){
    monkey.velocityY -= 20;
  }
  
  
  
  monkey.collide(ground);
  
  drawSprites();
}

function createObstacle(){
  obstacle = createSprite(450,300,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -6;
  obstacle.scale = 0.2;
  obstacle.lifetime = 175
  obstacleGroup.add(obstacle);
}

function createBanana(){
  banana = createSprite(450,200,20,20);
  banana.addImage(bananaImage);
  banana.velocityX = -6;
  banana.scale = 0.05;
  banana.lifetime = 175
  bananasGroup.add(banana)
}




