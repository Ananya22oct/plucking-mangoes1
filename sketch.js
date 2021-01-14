
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var mango;
var stone;
var ground;
var tree;
var boy,boyImage;
var chain;


function preload()
{
boyImage= loadImage("images/boy.png");
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  mango1 = new Mango(920,300,30);
	mango2 = new Mango(880,250,30);
	mango3 = new Mango(750,260,30);
	mango4 = new Mango(700,300,30);
	mango5 = new Mango(800,350,30);
	mango6 = new Mango(800,280,30);
  mango7 = new Mango(720,370,30);
  stone=new Stone(140,450,20);
  ground=new Ground(500,590,1000,20);
  tree=new Tree(810,400);
    
  boy=createSprite(195,510,250,250);
  boy.addImage(boyImage);
  boy.scale=0.1
  chain = new Chain(stone.body,{x:140, y:450});

    


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("pink");

text("Press Space To Get Second Chance To Play",100,100);
 

 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 stone.display();
 chain.display();
 boy.display();
  
 ground.display();
 

  

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  
  
  drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
 // Matter.Body.applyForce(stone.body, stone.body.position, {x:18, y: -20})
chain.fly();
}
function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stone.body,{x:140, y:500});
chain.attach(stone.body);
}
}
function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
}
}
 

