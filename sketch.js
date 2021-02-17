const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ground,stone,hammer;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	stone = new Stone(700,320,70,70);
	hammer = new Hammer(100,150);

	Engine.run(engine);
  
}


function draw() {
Engine.update(engine)
  rectMode(CENTER);
  background(0);

  ground.display()
  hammer.display()
  
 
}



