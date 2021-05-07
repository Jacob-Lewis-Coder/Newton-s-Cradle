const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 621);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(380, 50, 450, 30);
	ball1 = new Ball(220, 480);
  ball2 = new Ball(297, 480);
  ball3 = new Ball(376, 480);
  ball4 = new Ball(455, 480);
  ball5 = new Ball(533, 480)
	//Create till ball5

	console.log(ball1.body)

  //Create rope objects
  rope1 = new Rope(ball1.body,roof.body,-150)
  rope2 = new Rope(ball2.body,roof.body,-75)
  rope3 = new Rope(ball3.body,roof.body,0)
  rope4 = new Rope(ball4.body,roof.body,75)
  rope5 = new Rope(ball5.body,roof.body,150)

  
}


function draw() {
  background("black");
	Engine.update(engine);

  roof.display();

 
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();


  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  
  
  //drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body, ball1.body.position,{x:-60, y:-45})
	}
}