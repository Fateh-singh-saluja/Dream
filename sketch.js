
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg;
var ground1;
var ground2;
var ground3;
var ground4;
var door;
var level1;
var level2;
var gameState="level1";


function preload() {
    backgroundImg = loadImage("IMAGES/bg.jpg");
   
}

function setup() {
	var canvas = createCanvas(700,400);
	engine = Engine.create();
  world = engine.world;

 
  ground1 = new Ground(200,360,750,10);
  ground2 = new Ground(640,260,130,10);
  ground3 = new Ground(5,250,10,800);
  ground4 = new  Ground(580,310,10,110);
  player  = new Player(50,320,50,50);
  door    = new Door (690,215,30,80);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(backgroundImg);
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  player.display();
  door.display();

  drawSprites();
 
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {

    Matter.Body.applyForce(player.body,player.body.position,{x:20,y:0});

  }
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(player.body,player.body.position,{x:0,y:-40});

  }
  if (keyCode === LEFT_ARROW) {

    Matter.Body.applyForce(player.body,player.body.position,{x:-20,y:0});

  }

}

function switchScene(){

  if(isTouching(player, door)){
    gameState="level2"
    console.log(gameState);
  }
  else {
    gameState="level1"
  }


}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}
 

