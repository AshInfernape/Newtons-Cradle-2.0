
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//suspension=createSprite(290,200,600,200);
bobObject1=new Bob(300,350,30);
bobObject2=new Bob(350,350,30);
bobObject3=new Bob(400,350,30);
bobObject4=new Bob(450,350,30);
bobObject5=new Bob(500,350,30);
//bob6=new Bob(150,250,30);
 //fill ("brown");
  slab = new Ground(400,100,300,40);
  rope1= new Rope(bobObject1.body,slab.body,-50*2,0);
  rope2= new Rope(bobObject2.body,slab.body,-25*2,0);
  rope3= new Rope(bobObject3.body,slab.body,-0*2,0);
  rope4= new Rope(bobObject4.body,slab.body,25*2,0);
  rope5= new Rope(bobObject5.body,slab.body,50*2,0);
  //sling6= new Suspender(bob6.body,ground1.body,-40*2,0);
	Engine.run(engine);
  
}


function draw() {
  background("#a500ff");
//	ground.fill(48,22,8);
	//ground.stroke(0);
  rectMode(CENTER);
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  slab.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //sling6.display();

  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === DOWN_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-150,y:-160}); } 
} 
