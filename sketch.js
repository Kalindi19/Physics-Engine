const World= Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;

var engine, world;
var ball;
var ground;

function setup() {
  createCanvas(800,400);

  engine= Engine.create();
  world= engine.world;

  var ball_option={
    restitution:1
  }
  ball= Bodies.circle(400,200,25,ball_option);
  World.add(world,ball);

  var ground_option= {
    isStatic: true
  }
  ground= Bodies.rectangle(400,390,800,20, ground_option);
  World.add(world,ground);

  console.log(ground)
}

function draw() {
  background("black");  

  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,25,25);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

}