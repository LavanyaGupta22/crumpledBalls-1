
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var bottom;
var left,right;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new PaperObject(200,200,50);
    ground = new Ground(400,700,800,30);
    bottom = new Dustbin(600,675,300,20);
    left = new Dustbin(450,620,20,130);
    right = new Dustbin(750,620,20,130);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 
 // Engine.update(engine);
  paper.display();
  ground.display();
  bottom.display();
  left.display();
 right.display();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}

