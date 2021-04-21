
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
 

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create a Ground
ground = new Round(0,650,1600,10);
ball1 = new Ball(200,150,20);
dustbin1 = new Sides(1500,520,10,80);
dustbin2 = new Sides(1300,520,10,80);
dustbin3 = new Sides(1400,620,100,10);
}


function draw() {
  background(0);
Engine.update(engine) 

 ball1.display();
  ground.display();  
  dustbin1.display();  
  dustbin2.display();  
  dustbin3.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

   Matter.Body.applyForce(ball1.body,ball1.body.position,{x:75,y:-75});
    
  	}
}





