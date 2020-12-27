
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground;
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(1250, 500);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.

	paper1 = new Paper(160,390);
	ground = new Ground(625,420,1250,20);
	box1 = new Dustbin(730,360,20,100);
	box2 = new Dustbin(990,360,20,100);
	box3 = new Dustbin(860,400,240,20);



  
}


function draw() {
//   rectMode(CENTER);
  background(0);

 ground.display();
 paper1.display();
 box1.display();
 box2.display();
 box3.display();
// keypressed();
 drawSprites();
//  text(mouseX+","+mouseY,200,200)
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:115,y:-115});
	}

}

