
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rec1,rec2,rec3;
var paper, ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rec1 = new Dustbin(600,560,200,20);
	rec2 = new Dustbin(500,500,20,100);
	rec3 = new Dustbin(700,500,20,100);
	ground = new Ground(400,580,800,20);
	paper = new Paper(100,560,20);

	Engine.run(engine);
    Engine.update(engine)
}


function draw() {
  rectMode(CENTER);
  background(0);
  rec1.display();
  rec2.display();
  rec3.display();
  ground.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})
	}
}

