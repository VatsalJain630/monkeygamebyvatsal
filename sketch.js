
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

 
}



function setup() {
 
createCanvas(600,600);  
  
 
  
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2; 
  console.log(ground.x)
  
   obstaclesGroup = createGroup();

  
}


function draw() {

  background(255);
  
  
  if (ground.x<180) {
    ground.x=ground.width/2;
    
  }
  
  if (keyDown("space") ){
    monkey.velocityY=-12   ;
  }
 monkey.velocityY=monkey.velocityY+0.8;
 monkey.collide(ground); 
  
  var survivalTime=0;   
  stroke("white");
   textSize(20);
  fill("white");
 text("Score:"+score,500,50);
   
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
spawnobstacle()
  spawnbanana()
  
  drawSprites();
}

function spawnobstacle(){
  if (frameCount % 60 === 0){
   var stone = createSprite(600,310,10,40);
    stone.addImage(obstacleImage);
    stone.scale=0.2
  stone.velocityX = -6
  }
  
}

function spawnbanana(){
  
  if (frameCount % 60 === 0){
   var banana = createSprite(600,100,10,40);
    banana.addImage(bananaImage);
    banana.scale=0.1
  banana.velocityX = -6
  }
  
  
  
  
  
  
  
  
  
}


