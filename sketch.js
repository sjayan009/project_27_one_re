
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roofObject1 = new roof(400,120,250,30);
	bobObject1 = new Bob(300,320,50,70);
	bobObject2 = new Bob(350,320,50,70);
	bobObject3 = new Bob(400,320,50,70);
	bobObject4 = new Bob(450,320,50,70);
  bobObject5 = new Bob(500,320,50,70);
  
  //HIROPE1 = rope(bobObject1.body, roofObject1.body, -bobDiameter*2, 0);



	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("blue");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject1.display();




  drawSprites();
 
}



