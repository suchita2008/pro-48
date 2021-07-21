
  var userplayer,computerplayer;
  var upimage,cpimage;
  var deadimg;
  var backgroundImage;
  var score=0;
  var bulletGroup;
  var bullet ;
 function preload(){
   upimage=loadImage("up 4.png");
   cpimage=loadImage("cp.png");
    backgroundImage=loadImage("bg 2 png.jpg");
  deadimg=loadImage("dead.png");
 }

function setup() {
  createCanvas(800, 800);
  userplayer=createSprite(700,400,50,50);
  userplayer.addImage(upimage);
  userplayer.scale=0.2;
  
  computerplayer=createSprite(100,400,50,50);
  computerplayer.addImage(cpimage);
  computerplayer.scale=0.4;
   
  bulletGroup=new Group();
  
}
 


function draw() {
  background(backgroundImage);   
  userplayer.y =World.mouseY;
  computerplayer.y = Math.round(random(100,700));
  strokeWeight(4);
  fill("black");
  textSize(20);
  text("Score="+score,400,100);
   
  if(keyDown("space")){
    createBullets()
   // temp_bullets.y = userplayer.y;
    
  }
  if (bulletGroup.isTouching(computerplayer)){
    bulletGroup.destroyEach();
    score=score+1;
    }
    if (score===5){
      dead();
    }
  drawSprites();

}

function dead(){
  computerplayer.addImage(deadimg);
computerplayer.y =400;
strokeWeight(15);
textSize(25);
fill("black");

text("you win",400,300);
}

function createBullets(){
  var bullets=createSprite(userplayer.x,userplayer.y,10,10);
  bullets.shapeColor="yellow";
  
  bullets.velocityX= -9;
  bulletGroup.add(bullets);
  
  //return bullets;

}