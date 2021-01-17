const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
	createCanvas(1200, 700);

	rectMode(CENTER);
engine = Engine.create();
	world = engine.world;
  dustbinobj = new dustbin(1200,650);
  paperObject = new Paper(200,450,40);
groundObject = new ground(width/2,670, width,20 );
  


Engine.run(engine);
	
}

  


function draw() {
   rectMode(CENTER)
 background(0); 
 
  dustbinobj.display();
  paperObject.display();
 groundObject.display();
}

function keypressed() {
  if (keyCode === UP_ARROW){
	 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		
	
	 

  }
}












