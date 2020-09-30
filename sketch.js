const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, object, ball;
var box1,box2, ground1
function setup() {
 createCanvas(800,400);
engine= Engine.create();
world = engine.world;


box1 = new Ball(200,300,50,50);
box2 = new Ball(240,100,50,100);
ground1 = new ground(200,390,400,20);
//var object_option={
 // isStatic:true
}

//  object = Bodies.rectangle(200,100,50,50,object_option);
//World.add(world,object);

//var ground_option={x
 // isStatic:true
//}
//ground = Bodies.rectangle(200,390,400,20,ground_option)
//World.add(world,ground)
  //createSprite(800, 200, 50, 50);
//var ball_options={
  //restitution:1.0
//}
//ball= Bodies.circle(200,100,20,ball_options)
//World.add(world,ball);

//}

function draw() {
  background("black");
 Engine.update(engine);
  //rectMode(CENTER);
// rect(200,200,50,50);
 //rect(ground.position.x,ground.position.y,400,20);
//ellipseMode(RADIUS);
//ellipse(ball.position.x,ball.position.y,20)
box1.display();
box2.display();
ground1.display();
 //drawSprites();
}