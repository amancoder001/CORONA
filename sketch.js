var road , roadImage;
var boy , boyImage,boyani;
var virus , virusImage;
var diamonds , diaIMage;
var jwell,jwellImage;
var cash,cashImage;
var sword,swordImage;
var score;
var PLAY=0;
var END=1;
var gameState=PLAY;
var gameOver, game;
var restart , rest;
var but1,but1Image;
var but2,but2Image;
var inv1;
var inv2;

function preload() {
roadImage = loadImage("road.png")
boyImage = loadAnimation("Runner-1.png","Runner-2.png")   
virusImage = loadImage("virus.png")
cashImage = loadImage("cash.png")
diaImage = loadImage("diamonds.png")
swordImage = loadImage("sword.png")
jwellImage = loadImage("jwell.png")
boyani = loadImage("Runner-1.png")
gameOver = loadImage("gameOver.png")
restart = loadImage("restart.png")
but1Image = loadImage("left.png")
but2Image= loadImage("right.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight);

road = createSprite(width/2,height-500,100,800);
road.addImage(roadImage)
road.scale=1.3;
road.velocityY= 3

cashG = new Group();
diamondsG = new Group();
jwelleryG = new Group();
swordGroup = new Group();
virusG = new Group();

boy = createSprite(width/2,height-100,20,20)
boy.addAnimation("running", boyImage)
boy.scale=0.05;


game = createSprite(width/2,height/2)
game.scale=0.5
game.addImage(gameOver)
game.visible=false;

rest = createSprite(width/2,height/2+50);
rest.scale=0.07;
rest.addImage(restart);
rest.visible=false;



inv1 = createSprite(width/2-500,height/2,630,50000);
inv1.visible=false;

inv2 = createSprite(width/2+500,height/2,630,50000)
inv2.visible=false;

score = 0;
}

function draw(){
  background(220) 
  if(gameState===PLAY){
boy.x=World.mouseX
boy.velocityX=0;
//boy.debug=true
boy.collide(inv1);
boy.collide(inv2);

  

 
if(road.y>height-300) {
  road.y=height-400
}
if(boy.isTouching(cashG)){
  score = score+20
  cashG.destroyEach();
}
if(boy.isTouching(swordGroup)){
  score = score+80
  swordGroup.destroyEach();
}

if(boy.isTouching(diamondsG)){
  score = score+40
  diamondsG.destroyEach();
}
if(boy.isTouching(jwelleryG)){
  score = score+60
  jwelleryG.destroyEach();
}
if(boy.isTouching(virusG)){
  gameState=END;
}
}else if(gameState===END){
  cashG.setVelocityYEach(0)
  swordGroup.setVelocityYEach(0)
  diamondsG.setVelocityYEach(0)
  jwelleryG.setVelocityYEach(0)
  virusG.setVelocityYEach(0)
  
  cashG.destroyEach();
  swordGroup.destroyEach();
    diamondsG.destroyEach();
     jwelleryG.destroyEach();
      virusG.destroyEach();
      
     road.velocityY=0; 
      game.visible=true;
      rest.visible=true;
      
 if (touches.length > 0 || mousePressedOver(restart)) {
   reset();
   touches = [];
 }
  
}

 
  createvirus();
 createCash();
    createDiamonds();
    createJwellery();
    createSword();

 drawSprites(); 
  textSize(20);
  fill(255)
  text("Vacinate: " + score, width / 2-300, height / 2-200)
}

function createCash() {
  if (World.frameCount % 230 == 0) {
    cash = createSprite(Math.round(random(width/2-160,width/2+160)), height/2-600, 10, 10);
    cash.addImage(cashImage);
    cash.scale = 0.12;
    cash.velocityY = 3;
    cash.lifetime = 350;
    cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 170 == 0) {
     diamonds = createSprite(Math.round(random(width/2-180,width/2+180)), height/2-600, 10, 10);
    diamonds.addImage(diaImage);
    diamonds.scale = 0.03;
    diamonds.velocityY = 3;
    diamonds.lifetime = 350;
    diamondsG.add(diamonds);
  }
}

function createJwellery() {
  if (World.frameCount % 250 == 0) {
    jwell = createSprite(Math.round(random(width/2-180,width/2+180)), height/2-600, 10, 10);
    jwell.addImage(jwellImage);
    jwell.scale = 0.13;
    jwell.velocityY = 3;
    jwell.lifetime = 350;
    jwelleryG.add(jwell);
  }
}

function createSword() {
  if (World.frameCount % 330 == 0) {
     sword = createSprite(Math.round(random(width/2-180,width/2+180)), height/2-600, 10, 10);
    sword.addImage(swordImage);
    sword.scale = 0.1;
    sword.velocityY = 3;
    sword.lifetime = 350;
    swordGroup.add(sword);
  }
}
  
 function createvirus(){
   if (World.frameCount % 80 == 0) {
      virus = createSprite(Math.round(random(width/2-180,width/2+180)), height/2-600, 10, 10);
     virus.addImage(virusImage);
    virus.scale = 0.02;
    virus.velocityY = 3;
     virus.lifetime = 350;
     virusG.add(virus);
   } 
 } 
  
  function reset(){
   gameState=PLAY;
   
   road.velocityY=3;
   game.visible=false;
   rest.visible=false;
   
   cashG.setVelocityYEach(3)
   swordGroup.setVelocityYEach(3)
   diamondsG.setVelocityYEach(3)
   jwelleryG.setVelocityYEach(3)
   virusG.setVelocityYEach(3)
    
    score=0;
    
  }
  








